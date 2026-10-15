#!/usr/bin/env bash
# Enrichment runner: polls for batch JSON files and runs enrich.py on each as they appear.
# Runs up to 2 enrichments in parallel to stay within Shopify API rate limits.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENRICH="$SCRIPT_DIR/enrich.py"
LOG="$SCRIPT_DIR/enrichment-run.log"

BATCHES=(
  "tops-batch-a.json"
  "tops-batch-b.json"
  "tops-batch-c.json"
  "tops-batch-d.json"
  "tops-batch-e.json"
  "dress-batch-f.json"
  "dress-batch-g.json"
)

MAX_PARALLEL=2
POLL_INTERVAL=30
MAX_WAIT=3600  # 1 hour max wait per batch file

echo "=== Enrichment Runner Started $(date) ===" | tee "$LOG"
echo "Waiting for ${#BATCHES[@]} batch files..." | tee -a "$LOG"

declare -A DONE
declare -A RUNNING
PIDS=()

check_json() {
  python3 -c "import json; json.load(open('$1'))" 2>/dev/null
}

wait_for_slot() {
  while [ ${#PIDS[@]} -ge $MAX_PARALLEL ]; do
    NEW_PIDS=()
    for pid in "${PIDS[@]}"; do
      if kill -0 "$pid" 2>/dev/null; then
        NEW_PIDS+=("$pid")
      else
        wait "$pid" || true
      fi
    done
    PIDS=("${NEW_PIDS[@]}")
    if [ ${#PIDS[@]} -ge $MAX_PARALLEL ]; then
      sleep 5
    fi
  done
}

run_batch() {
  local batch="$1"
  local path="$SCRIPT_DIR/$batch"
  echo "" | tee -a "$LOG"
  echo ">>> RUNNING: $batch ($(date))" | tee -a "$LOG"
  python3 "$ENRICH" "$path" 2>&1 | tee -a "$LOG"
  local status=${PIPESTATUS[0]}
  if [ $status -eq 0 ]; then
    echo ">>> COMPLETE: $batch ($(date))" | tee -a "$LOG"
  else
    echo ">>> FAILED: $batch (exit $status) ($(date))" | tee -a "$LOG"
  fi
  return $status
}

TOTAL_DONE=0
WAITED=0

while [ $TOTAL_DONE -lt ${#BATCHES[@]} ]; do
  for batch in "${BATCHES[@]}"; do
    if [ -n "${DONE[$batch]:-}" ]; then
      continue
    fi

    path="$SCRIPT_DIR/$batch"
    if [ -f "$path" ] && check_json "$path"; then
      if [ -z "${RUNNING[$batch]:-}" ]; then
        wait_for_slot
        run_batch "$batch" &
        PIDS+=($!)
        RUNNING[$batch]=$!
        echo "  Started $batch (PID $!)" | tee -a "$LOG"
      else
        pid=${RUNNING[$batch]}
        if ! kill -0 "$pid" 2>/dev/null; then
          wait "$pid" || true
          DONE[$batch]=1
          TOTAL_DONE=$((TOTAL_DONE + 1))
          echo "  Finished $batch ($TOTAL_DONE/${#BATCHES[@]})" | tee -a "$LOG"
        fi
      fi
    fi
  done

  if [ $TOTAL_DONE -lt ${#BATCHES[@]} ]; then
    sleep $POLL_INTERVAL
    WAITED=$((WAITED + POLL_INTERVAL))
    REMAINING=$((${#BATCHES[@]} - TOTAL_DONE))
    echo "  ... polling ($REMAINING remaining, waited ${WAITED}s)" | tee -a "$LOG"
  fi

  if [ $WAITED -ge $MAX_WAIT ]; then
    echo ">>> TIMEOUT: $REMAINING batches still missing after ${MAX_WAIT}s" | tee -a "$LOG"
    break
  fi
done

# Wait for any remaining background processes
for pid in "${PIDS[@]}"; do
  if kill -0 "$pid" 2>/dev/null; then
    wait "$pid" || true
  fi
done

echo "" | tee -a "$LOG"
echo "=== Enrichment Runner Finished $(date) ===" | tee -a "$LOG"
echo "Completed: $TOTAL_DONE/${#BATCHES[@]} batches" | tee -a "$LOG"

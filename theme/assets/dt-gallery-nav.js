if (!customElements.get('dt-gallery-nav')) {
  customElements.define('dt-gallery-nav', class extends HTMLElement {
    connectedCallback() {
      this.gallery = this.closest('media-gallery');
      if (!this.gallery) return;

      this.items = this.gallery.querySelectorAll('.product__media-item');
      this.total = this.items.length;
      if (this.total < 2) return;

      this.currentEl = this.querySelector('.dt-gallery-nav__current');
      this.fill = this.querySelector('.dt-gallery-nav__fill');
      this.prevBtn = this.querySelector('[data-dir="prev"]');
      this.nextBtn = this.querySelector('[data-dir="next"]');
      this.current = 0;

      this.prevBtn.addEventListener('click', () => this.go(-1));
      this.nextBtn.addEventListener('click', () => this.go(1));

      this._onScroll = this._throttle(() => this._track(), 100);
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._track();
    }

    _track() {
      var viewTop = window.scrollY + 120;
      var best = 0;
      var bestDist = Infinity;
      for (var i = 0; i < this.items.length; i++) {
        var rect = this.items[i].getBoundingClientRect();
        var itemTop = rect.top + window.scrollY;
        var dist = Math.abs(itemTop - viewTop);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      this.set(best + 1);
    }

    set(n) {
      if (n === this.current) return;
      this.current = n;
      this.currentEl.textContent = n;
      this.fill.style.width = ((n / this.total) * 100) + '%';
      this.prevBtn.disabled = n <= 1;
      this.nextBtn.disabled = n >= this.total;
    }

    go(dir) {
      var next = Math.min(this.total, Math.max(1, this.current + dir));
      if (next === this.current) return;
      var target = this.items[next - 1];
      if (!target) return;
      var top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    _throttle(fn, ms) {
      var timer = null;
      return function() {
        if (timer) return;
        timer = setTimeout(function() { timer = null; fn(); }, ms);
      };
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this._onScroll);
    }
  });
}

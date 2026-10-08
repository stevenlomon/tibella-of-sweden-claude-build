(() => {
  const boundProductInfos = new WeakSet();

  const bindProductStickyAtc = (productInfo) => {
    const stickyAtc = productInfo?.querySelector('[data-product-sticky-atc]');

    if (!productInfo || !stickyAtc || boundProductInfos.has(productInfo) || typeof subscribe !== 'function') return;

    boundProductInfos.add(productInfo);

    const stickyButton = stickyAtc.querySelector('button');
    const stickyLabel = stickyAtc.querySelector('[data-sticky-submit-label]');
    const stickyPrice = stickyAtc.querySelector('[data-sticky-product-price]');
    const sectionId = productInfo.dataset.section;

    const syncStickyAtc = () => {
      const sourceButton = productInfo.querySelector('.product-form__submit');
      const sourceLabel = sourceButton?.querySelector('span:not(.loading__spinner)');
      const sourcePrice = productInfo.querySelector(`#price-${sectionId} .price-item--regular`);

      if (!sourceButton || !stickyButton) return;

      stickyButton.disabled = sourceButton.disabled;

      if (sourceLabel && stickyLabel) {
        stickyLabel.textContent = sourceLabel.textContent.trim();
      }

      if (sourcePrice && stickyPrice) {
        stickyPrice.textContent = sourcePrice.textContent.trim();
      }
    };

    syncStickyAtc();

    subscribe(PUB_SUB_EVENTS.optionValueSelectionChange, (event) => {
      if (event?.data?.event && productInfo.contains(event.data.event.target)) {
        stickyButton.disabled = true;
      }
    });

    subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
      if (event?.data?.sectionId === sectionId) syncStickyAtc();
    });
  };

  const initProductStickyAtc = () => {
    document.querySelectorAll('product-info.dt-product-page').forEach(bindProductStickyAtc);
  };

  document.addEventListener('product-info:loaded', (event) => {
    if (event.target.matches?.('product-info.dt-product-page')) {
      bindProductStickyAtc(event.target);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductStickyAtc, { once: true });
  } else {
    initProductStickyAtc();
  }
})();

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
      this.animating = false;

      this.items.forEach(function(item, i) {
        if (i === 0) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });

      this.prevBtn.addEventListener('click', () => this.go(-1));
      this.nextBtn.addEventListener('click', () => this.go(1));

      this.set(1);
    }

    set(n) {
      if (n === this.current) return;
      this.current = n;
      this.currentEl.textContent = n;
      var pct = this.total > 1 ? ((n - 1) / (this.total - 1)) * 100 : 0;
      this.fill.style.width = pct + '%';
    }

    go(dir) {
      if (this.animating) return;
      var next = this.current + dir;
      if (next > this.total) next = 1;
      if (next < 1) next = this.total;

      var oldItem = this.items[this.current - 1];
      var newItem = this.items[next - 1];
      var slideClass = dir > 0 ? 'dt-slide-from-right' : 'dt-slide-from-left';

      this.animating = true;
      oldItem.classList.remove('is-active');
      newItem.classList.add('is-active', slideClass);
      this.set(next);

      var self = this;
      newItem.addEventListener('animationend', function handler() {
        newItem.removeEventListener('animationend', handler);
        newItem.classList.remove(slideClass);
        self.animating = false;
      });
    }

    disconnectedCallback() {}
  });
}

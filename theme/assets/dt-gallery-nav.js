if (!customElements.get('dt-gallery-nav')) {
  customElements.define('dt-gallery-nav', class extends HTMLElement {
    connectedCallback() {
      this.gallery = this.closest('media-gallery');
      if (!this.gallery) return;

      this.items = this.gallery.querySelectorAll('.product__media-item');
      this.total = this.items.length;
      if (this.total < 2) return;

      this.initialFirstId = this.items[0].dataset.mediaId;

      this.currentEl = this.querySelector('.dt-gallery-nav__current');
      this.fill = this.querySelector('.dt-gallery-nav__fill');
      this.prevBtn = this.querySelector('[data-dir="prev"]');
      this.nextBtn = this.querySelector('[data-dir="next"]');
      this.current = 0;
      this.animating = false;
      this.locked = false;

      this.items.forEach(function(item, i) {
        item.classList.remove('scroll-trigger', 'animate--fade-in');
        if (i === 0) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });

      var slider = this.gallery.querySelector('slider-component');
      if (slider) {
        slider.update = function() {};
        slider.initPages = function() {};
        slider.onButtonClick = function() {};
      }

      var self = this;
      this.gallery.setActiveMedia = function(mediaId, prepend) {
        var target = self.gallery.querySelector('[data-media-id="' + mediaId + '"]');
        if (!target) return;

        self._refreshItems();

        self.items.forEach(function(item) {
          item.classList.remove('is-active');
        });

        var idx = Array.from(self.items).indexOf(target);
        if (idx === -1) return;

        target.classList.add('is-active');

        var firstId = self.items[0].dataset.mediaId;
        if (firstId === self.initialFirstId) {
          self.locked = false;
          self.style.display = '';
          self.set(idx + 1);
          var totalEl = self.querySelector('.dt-gallery-nav__total');
          if (totalEl) totalEl.textContent = self.total;
        } else {
          self.locked = true;
          self.style.display = 'none';
        }
      };

      this.prevBtn.addEventListener('click', () => this.go(-1));
      this.nextBtn.addEventListener('click', () => this.go(1));

      this.set(1);
    }

    _refreshItems() {
      this.items = this.gallery.querySelectorAll('.product__media-item');
      this.total = this.items.length;
    }

    set(n) {
      if (n === this.current) return;
      this.current = n;
      this.currentEl.textContent = n;
      this.fill.style.width = ((n / this.total) * 100) + '%';
    }

    go(dir) {
      if (this.animating || this.locked) return;
      this._refreshItems();
      if (this.current > this.total) this.current = 1;
      var next = this.current + dir;
      if (next > this.total) next = 1;
      if (next < 1) next = this.total;
      this._switchTo(next, dir);
    }

    _switchTo(next, dir) {
      if (this.animating) return;
      var oldItem = this.items[this.current - 1];
      var newItem = this.items[next - 1];
      var inClass = dir > 0 ? 'dt-slide-in-right' : 'dt-slide-in-left';

      this.animating = true;
      oldItem.classList.add('dt-slide-out');
      newItem.classList.add('dt-slide-entering', inClass);
      this.set(next);

      var self = this;
      setTimeout(function() {
        oldItem.classList.remove('is-active', 'dt-slide-out');
        newItem.classList.remove('dt-slide-entering', inClass);
        newItem.classList.add('is-active');
        self.animating = false;
      }, 420);
    }

    disconnectedCallback() {}
  });
}

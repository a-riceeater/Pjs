const page = {
  get: (a) => {
    return {
      __element: document.querySelector(a),
      get html() { return this.__element.innerHTML },
      set html(b) { this.__element.innerHTML = b },

      get text() { return this.__element.innerText },
      set text(b) { this.__element.innerText = b },

      get style() { return this.__element.style },
      
      on: (a, b) => {
        self.addEventListener(a, b)
      }
    };
  },

  getAll: (a) => {
    return {
      __elements: document.querySelectorAll(a),

      each: function (b) {
        this.__elements.forEach(c => {
          b(page.get(c));
        })
      }
    }
  },

  on: (a, b) => {
    return document.addEventListener(a, b);
  },

  body: {
    on: (a, b) => {
      return document.body.addEventListener(a, b)
    }
  }
};
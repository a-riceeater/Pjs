const page = {
  get: (a) => {

  }
}

page.get.defineProperty(page.get.prototype, "html", {
  get: function () {
    return this.element ? this.element.innerHTML : "";
  },
  set: function (newValue) {
    if (this.element) {
      this.element.innerHTML = newValue;
    }
  },
});

export class HeroCarousel {
  constructor(jsonPath, elements) {
    this.jsonPath = jsonPath;
    this.elements = elements;
    this.data = [];
    this.currentIndex = 0;
    this.init();
  }

  async init() {
    await this.loadData();
    this.renderSlide();
    this.addEvents();
  }

  async loadData() {
    try {
      const response = await fetch(this.jsonPath);
      this.data = await response.json();
    } catch (error) {
      console.error("Gagal memuat data JSON:", error);
    }
  }

  renderSlide() {
    if (!this.data.length) return;
    const item = this.data[this.currentIndex];
    const { title, description, image } = item;

    const titleEl = document.querySelector(this.elements.title);
    const descEl = document.querySelector(this.elements.desc);
    const imgEl = document.querySelector(this.elements.img);

    imgEl.style.opacity = 0;
    setTimeout(() => {
      titleEl.textContent = title;
      descEl.textContent = description;
      imgEl.src = image;
      imgEl.style.opacity = 1;
    }, 300);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.data.length;
    this.renderSlide();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.data.length) % this.data.length;
    this.renderSlide();
  }

  addEvents() {
    document
      .querySelector(this.elements.next)
      .addEventListener("click", () => this.nextSlide());
    document
      .querySelector(this.elements.prev)
      .addEventListener("click", () => this.prevSlide());
  }
}

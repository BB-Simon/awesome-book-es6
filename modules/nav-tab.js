class Navigation {
  constructor() {
    this.navItems = document.querySelectorAll('.nav-item');
    this.sections = document.querySelectorAll('.sections');

    this.navItems.forEach((item, index) => {
      item.addEventListener('click', () => this.handleClickOnNavItem(index));
    });
  }

  handleClickOnNavItem = (navIndex) => {
    this.sections.forEach((section, index) => {
      if (index === navIndex) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
}

export default Navigation;
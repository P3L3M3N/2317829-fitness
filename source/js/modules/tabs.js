export class Tabs {
  constructor() {
    this.documentClickHandler = this.documentClickHandler.bind(this);
    this.initialize();
  }

  initialize() {
    this.initializeAllTabs();
    document.addEventListener('click', this.documentClickHandler);
  }

  initializeAllTabs() {
    const tabsParents = document.querySelectorAll('[data-tabs="parent"]');
    tabsParents.forEach((tabParent) => {
      this.initializeTab(tabParent);
    });
  }

  initializeTab(tabParent) {
    const tabControls = tabParent.querySelectorAll('[data-tabs="control"]');
    const tabElements = tabParent.querySelectorAll('[data-tabs="element"]');

    tabElements.forEach((element) => element.classList.remove('is-active'));
    tabControls.forEach((control) => control.classList.remove('is-active'));

    if (tabElements.length > 0 && tabControls.length > 0) {
      tabElements[0].classList.add('is-active');
      tabControls[0].classList.add('is-active');
    }
  }

  documentClickHandler(event) {
    const targetControl = event.target.closest('[data-tabs="control"]');
    if (targetControl) {
      event.preventDefault();
      this.openTab(targetControl);
    }
  }

  openTab(targetControl) {
    const parentElement = targetControl.closest('[data-tabs="parent"]');
    const indexOfControl = Array.from(parentElement.querySelectorAll('[data-tabs="control"]')).indexOf(targetControl);
    const tabContentElements = parentElement.querySelectorAll('[data-tabs="element"]');

    parentElement.querySelectorAll('[data-tabs="control"]').forEach((control) => control.classList.remove('is-active'));
    tabContentElements.forEach((element) => element.classList.remove('is-active'));

    targetControl.classList.add('is-active');
    if (tabContentElements[indexOfControl]) {
      tabContentElements[indexOfControl].classList.add('is-active');
    }
  }
}

(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const navButton = document.querySelector(".nav__button");
const navigation = document.querySelector(".nav");
navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__button--active");
  navigation.classList.toggle("nav--active");
});
const navDropdownList = document.querySelector(".nav__list-item--dropdown");
const navDropdownListDesktop = document.querySelector(".desktop-nav__list-item--dropdown");
navDropdownList.addEventListener("click", (event) => {
  event.preventDefault();
  navDropdownList.classList.toggle("nav__list-item--dropdown--active");
});
navDropdownListDesktop.addEventListener("click", (event) => {
  navDropdownListDesktop.classList.toggle("desktop-nav__list-item--dropdown--active");
});
document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target) && !navButton.contains(event.target)) {
    navDropdownList.classList.remove("nav__list-item--dropdown--active");
    navigation.classList.remove("nav--active");
    navButton.classList.remove("nav__button--active");
  }
});
document.addEventListener("click", (event) => {
  if (!navDropdownListDesktop.contains(event.target)) {
    navDropdownListDesktop.classList.remove("desktop-nav__list-item--dropdown--active");
  }
});

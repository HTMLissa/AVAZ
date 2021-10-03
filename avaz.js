let myNav = document.querySelector(".navbar");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 20
  ) {
    myNav.classList.add("nav-colored");
  } else {
    myNav.classList.remove("nav-colored");
  }
};

'use strict';

// sticky navbar
const nav = document.querySelector("nav");
const home = document.querySelector("article.home");
const about = document.querySelector("article.about");
const resume = document.querySelector("article.resume");
const portfolio = document.querySelector("article.portfolio");
const blog = document.querySelector("article.blog");
const topNav = nav.offsetTop

window.onscroll = function() {
  if (window.scrollY >= topNav) {
    nav.classList.add("sticky");
    home.classList.add("sticky-article");
    about.classList.add("sticky-article");
    resume.classList.add("sticky-article");
    portfolio.classList.add("sticky-article");
    blog.classList.add("sticky-article");
  } else {
    nav.classList.remove("sticky");
    home.classList.remove("sticky-article");
    about.classList.remove("sticky-article");
    resume.classList.remove("sticky-article");
    portfolio.classList.remove("sticky-article");
    blog.classList.remove("sticky-article");
  }
};

const navDesktop = document.querySelector("nav");

window.addEventListener('scroll', () => {
  if (window.scrollY > 15) {
    navDesktop.classList.add('sticky-desktop');
    home.classList.add("sticky-article-desktop");
    about.classList.add("sticky-article-desktop");
    resume.classList.add("sticky-article-desktop");
    portfolio.classList.add("sticky-article-desktop");
    blog.classList.add("sticky-article-desktop");
  } else {
    navDesktop.classList.remove('sticky-desktop');
    home.classList.remove("sticky-article-desktop");
    about.classList.remove("sticky-article-desktop");
    resume.classList.remove("sticky-article-desktop");
    portfolio.classList.remove("sticky-article-desktop");
    blog.classList.remove("sticky-article-desktop");
  }
});

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        console.log(pages[i]);
        console.log("</br>");
        console.log(pages[i].dataset);
        console.log("<br/>");
        console.log(pages[i].dataset.page);
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// --------------

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist-mobile");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

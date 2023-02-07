// Hamburger menu
// (function () {
//   $('.hamburger-wrapper').on('click', function (){
//     $('.hamburger-menu').toggleClass('animate');
//     $('.mobile-menu-overlay').toggleClass('visible');
//     $('nav').toggleClass('black');
//   });
//   $('.mobile-menu-overlay > ul > li > a').on('click', function () {
//     $('.hamburger-menu').removeClass('animate');
//     $('.mobile-menu-overlay').removeClass('visible');
//   });
// })();

// scrolling navbar color change
// const navbar = document.querySelector('nav');
// window.onscroll = () => {
//   if (window.scrollY > 0) {
//     navbar.classList.add('active');
//   } else {
//     navbar.classList.remove('active');
//   }
// };
const card = ($) => {
  Drupal.behaviors.card = {
    attach() {
      //   const $context = $(context);
      (function () {
        $('.hamburger-wrapper').on('click', function () {
          $('.hamburger-menu').toggleClass('animate');
          $('.mobile-menu-overlay').toggleClass('visible');
          $('nav').toggleClass('black');
        });
        $('.mobile-menu-overlay > ul > li > a').on('click', function () {
          $('.hamburger-menu').removeClass('animate');
          $('.mobile-menu-overlay').removeClass('visible');
        });
      })();
      const navbar = document.querySelector('nav');
      window.onscroll = () => {
        if (window.scrollY > 0) {
          navbar.classList.add('active');
        } else {
          navbar.classList.remove('active');
        }
      };
    },
  };
};
card(jQuery);

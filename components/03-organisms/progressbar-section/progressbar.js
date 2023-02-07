// // new code

// const header = ($) => {
//   Drupal.behaviors.header = {
//     attach() {
//       function radialAnimate() {
//         $('svg.radial-progress').each(function (index, value) {
//           $(this).find($('circle.bar--animated')).removeAttr('style');
//           // Get element in Veiw port
//           const elementTop = $(this).offset().top;
//           const elementBottom = elementTop + $(this).outerHeight();
//           const viewportTop = $(window).scrollTop();
//           const viewportBottom = viewportTop + $(window).height();

//           if (elementBottom > viewportTop && elementTop < viewportBottom) {
//             const percent = $(value).data('countervalue');
//             const radius = $(this).find($('circle.bar--animated')).attr('r');
//             const circumference = 2 * Math.PI * radius;
//             const strokeDashOffset =
//               circumference - (percent * circumference) / 100;
//             $(this)
//               .find($('circle.bar--animated'))
//               .animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
//           }
//         });
//       }
//       // To check If it is in Viewport
//       const $window = $(window);
//       function checkIfInView() {
//         $('.countervalue').each(function () {
//           if ($(this).hasClass('start')) {
//             const elementTop = $(this).offset().top;
//             const elementBottom = elementTop + $(this).outerHeight();

//             const viewportTop = $(window).scrollTop();
//             const viewportBottom = viewportTop + $(window).height();

//             if (elementBottom > viewportTop && elementTop < viewportBottom) {
//               $(this).removeClass('start');
//               $('.countervalue').text();
//               const myNumbers = $(this).text();
//               if (myNumbers === Math.floor(myNumbers)) {
//                 $(this).animate(
//                   {
//                     Counter: $(this).text(),
//                   },
//                   {
//                     duration: 2800,
//                     easing: 'swing',
//                     step: (now) => {
//                       // console.log();
//                       $(this).text(Math.ceil(now));
//                     },
//                   },
//                 );
//               } else {
//                 $(this).animate(
//                   {
//                     Counter: $(this).text(),
//                   },
//                   {
//                     duration: 2800,
//                     easing: 'swing',
//                     step:(now)=>{
//                       $(this).text(`${now.toFixed(2)} $`);
//                     },
//                   },
//                 );
//               }

//               radialAnimate();
//             }
//           }
//         });
//       }

//       $window.on('scroll', checkIfInView);
//       $window.on('load', checkIfInView);
//     },
//   };
// };
// header(jQuery);

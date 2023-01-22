$(document).ready(function () {
// The code above adds smooth scrolling to the links in the nav bar. When a link is clicked, the default action of the event is prevented and then the link's href attribute is saved in the link variable. Then, the html and body elements are animated so that the page scrolls to the top of the element that the link is pointing to. The animation is set to take 850 milliseconds.
  $("nav a").on("click", function (event) {
    event.preventDefault();
    var link = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(link).offset().top,
      },
      850
    );
  });
});
;

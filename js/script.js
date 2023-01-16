$(document).ready(function(){
    // Adicionando rolagem suave aos links do nav
    $("nav a").on("click", function(event){
      event.preventDefault();
      var link = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(link).offset().top
      }, 800);
    });
  });
  
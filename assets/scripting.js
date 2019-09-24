$(document).ready(function() {

  $(".nav-trigger").click(function() {

    var src = $(".menu-button").attr("src") === "../images/closedMenu.png"
      ? "../images/openMenu.png"
      : "../images/closedMenu.png";
    $(".menu-button").attr("src", src);

    var alt = $(".menu-button").attr("alt") === "Closed Menu"
      ? "Open Menu"
      : "Closed Menu";
    $(".menu-button").attr("alt", alt);

    $(".nav-menu").slideToggle(400, function() {

      $(this).toggleClass("nav-expanded").css('display', '');

    });

  });

});

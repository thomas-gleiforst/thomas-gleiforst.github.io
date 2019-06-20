$(document).ready(function() {

  $(".nav-trigger").click(function() {

    var src = $(".menu-button").attr("src") === "closedMenu.png"
      ? "openMenu.png"
      : "closedMenu.png";
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

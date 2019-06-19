jQuery(document).ready(function() {

  jQuery(".nav-trigger").click(function() {

    jQuery(".nav-menu").slideToggle(400, function() {

      var menu = document.getElementById("menu-button");
      if (menu.src == "closedMenu.png"){
        menu.src = "openMenu.png";
        menu.alt = "Open Menu";
      }
      else {
        menu.src = "closedMenu.png";
        menu.alt = "Closed Menu";
      }

      jQuery(this).toggleClass("nav-expanded").css('display', '');

    });

  });

});

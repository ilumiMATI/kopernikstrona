function CenterMenu() {
  // creating variables for storing needed sizes
  $sizeVrWin    = $(window).height();
  $sizeVrHeader = $("header").height();
  $sizeVrMenu   = $(".o-menu-content").height();

  // checking if the header + .o-menu-content is smaller then the window
  // if that happens there there is a lot ugly white space under the items in the menu, we don't want that
  if(($sizeVrHeader + $sizeVrMenu) < $sizeVrWin) {
    // centering the items wrapper in the menu
    $(".o-menu").css({
      "align-items":"center"
    });
  } else {
    // bringing the items wrapper back to the normal flow
    $(".o-menu").css({
      "align-items":"flex-start"
    });
  }
}

$(function() {
  // calling CenterMenu when the site loads
  CenterMenu();

  // calling CenterMenu every time the window is resized
  $(window).on("resize", function() {
    CenterMenu();
  });
});
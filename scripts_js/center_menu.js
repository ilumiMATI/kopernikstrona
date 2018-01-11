function CenterMenu() {
  // checking if the header + .o-menu-content is smaller then the window
  // if that happens there there is a lot ugly white space under the items in the menu, we don't want that
  if(($sizeVrOuterHeader + $sizeVrOuterMenu) < $sizeVrWin) {
    // centering the items wrapper in the menu
    $($refMenu).addClass("o-menu--centered");
  } else {
    // bringing the items wrapper back to the normal flow
    $($refMenu).removeClass("o-menu--centered");
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
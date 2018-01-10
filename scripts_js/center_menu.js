function CenterMenu() {
  // checking if the header + .o-menu-content is smaller then the window
  // if that happens there there is a lot ugly white space under the items in the menu, we don't want that
  if(($sizeVrOuterHeader + $sizeVrMenu) < $sizeVrWin) {
    // centering the items wrapper in the menu
    $($refMenu).css({
      "justify-content":"center"
    });
  } else {
    // bringing the items wrapper back to the normal flow
    $($refMenu).css({
      "justify-content":"flex-start"
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
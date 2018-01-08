$(function() {
  // creating variables for storing needed references
  $refMenu = ".js-menu";
  $refMenuButton = ".js-menu-button";
  $refSubMenu    = ".js-sub-menu";

  // creating a variable that's going to determine if the menu is opened or not
  var isOpened = false;

  // toggling menu everytime the menu button is clicked
  $($refMenuButton).click(function() {
    if(isOpened == false) {
      isOpened = true;
      // showing the menu
      $($refMenu).css({
        "left":"-100%"
      });
      $($refSubMenu).css({
        "left":"0px"
      });
    } else {
      isOpened = false;
      // reversing everything
      $($refMenu).css({
        "left":"0px"
      });
      $($refSubMenu).css({
        "left":"100%"
      });
    }
  });
});
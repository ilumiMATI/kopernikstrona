$(function() {
  // creating variables for storing needed references
  $refMenuButton = ".js-menu-button";
  $refSubMenu = ".js-menu-button + .o-sub-menu";

  // creating a variable that's going to determine if the menu is visible or not
  $isVisible = false;

  // toggling menu everytime the menu button is clicked
  $($refMenuButton).click(function() {
    if($isVisible == false) {
      $isVisible = true;
      // showing the menu
      $($refSubMenu).css({
        "visibility":"visible"
      });
    } else {
      $isVisible = false;
      // reversing everything
      $($refSubMenu).css({
        "visibility":"hidden"
      });
    }
  });
});
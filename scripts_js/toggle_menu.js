$(function() {
  // creating variables for storing needed references
  $refHeaderMenuButton     = ".js-menu";
  $refHeaderMenuButtonIcon = ".js-menu__icon";
  $refHeaderMenuButtonText = ".js-menu__text";
  $refMenu   = ".o-menu";

  // creating a variable that's going to determine if the menu is visible or not
  $isVisible = false;

  // toggling menu everytime the menu button is clicked
  $($refHeaderMenuButton).click(function() {
    if($isVisible == false) {
      $isVisible = true;
      // changing the icon in the button to a cross
      $($refHeaderMenuButtonIcon).attr("src", "icons/header/close_red.svg");
      // changing the text color to red
      $($refHeaderMenuButtonText).css({
        "color":"rgb(255,0,60)"
      });
      // showing the menu
      $($refMenu).css({
        "visibility":"visible"
      });
    } else {
      $isVisible = false;
      // reversing everything
      $($refHeaderMenuButtonIcon).attr("src", "icons/header/menu.svg");
      $($refHeaderMenuButtonText).css({
        "color":"rgb(0,0,0)"
      });
      $($refMenu).css({
        "visibility":"hidden"
      });
    }
  });
});
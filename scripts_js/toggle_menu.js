$(function() {
  // creating variables for storing needed references
  $refHeaderMenuButton     = ".js-header-menu-button";
  $refHeaderMenuButtonIcon = ".js-header-menu-button__icon";
  $refHeaderMenuButtonText = ".js-header-menu-button__text";
  $refMenu = ".js-menu";

  // creating a variable for storing the offset from the top of the site
  $yOffset = 0;

  // creating a variable that's going to determine if the menu is opened or not
  var isOpened = false;

  // toggling menu everytime the menu button is clicked
  $($refHeaderMenuButton).click(function() {
    if(isOpened == false) {
      isOpened = true;
      // getting the offset for later adjustments
      $yOffset = $(document).scrollTop();
      // changing the icon in the button to a cross
      $($refHeaderMenuButtonIcon).attr("src", "icons/header/close_red.svg");
      // changing the text color to red
      $($refHeaderMenuButtonText).css({
        "color":"rgb(255,0,60)"
      });
      // showing the menu
      $($refMenu).css({
        "left":"0px"
      });
    } else {
      isOpened = false;
      // setting the offset to where it was before opening the menu
      $(document).scrollTop($yOffset);
      // reversing everything
      $($refHeaderMenuButtonIcon).attr("src", "icons/header/menu.svg");
      $($refHeaderMenuButtonText).css({
        "color":"rgb(0,0,0)"
      });
      $($refMenu).css({
        "left":"-100%"
      });
    }
  });
});
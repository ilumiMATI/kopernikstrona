function OpenMenu(yOffset) {
  $isMenuOpened = true;
  // getting the offset for later adjustments
  yOffset.val = $(document).scrollTop();
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
}

function CloseMenu(yOffset) {
  $isMenuOpened = false;
  // setting the offset to where it was before opening the menu
  $(document).scrollTop(yOffset.val);
  // reversing everything
  $($refHeaderMenuButtonIcon).attr("src", "icons/header/menu.svg");
  $($refHeaderMenuButtonText).css({
    "color":"rgb(0,0,0)"
  });
  $($refMenu).css({
    "left":"-100%"
  });
}

$(function() {
  // creating a variable for storing the offset from the top of the site
  var yOffset = { val: 0 }; // // a workaround to be able to pass by reference

  // creating a variable that's going to determine if the menu is opened or not
  $isMenuOpened = false; // a workaround to be able to pass by reference

  // everytime the menu button is clicked
  $($refHeaderMenuButton).click(function() {
    // toggling the menu
    if($isMenuOpened == false) {
      OpenMenu(yOffset);
    } else {
      CloseMenu(yOffset);
    }

    // closing all sub menus
    $($refSubMenu).each(function(){
      CloseSubMenu();
      /*$(this).css({
        "top":"calc(-100% + 55px)"
      });
      $($refSubMenuBottomBar).css({
        "bottom":"100%"
      });*/
    });

    // toggling quick menu if it's opened
      // TODO: when quick menu is finished
  });
});
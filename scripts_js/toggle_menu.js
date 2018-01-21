function OpenMenu(yOffset, menu = $refMenu) {
  // getting the offset for later adjustments
  yOffset.val = $(document).scrollTop();

  if(menu == $refMenu) {
    $isMenuOpened = true;

    // changing the icon in the button to a cross
    $($refHeaderMenuButtonIcon).attr("src", "icons/header/close_red.svg").css({
      "transform":"rotate(180deg)"
    });
    // changing the text color to red
    $($refHeaderMenuButtonText).css({
      "color":"rgb(255,0,60)"
    });
    // showing the menu
    $($refMenu).css({
      "transform":"none"
    });
  } else {
    $isQuickMenuOpened = true;

    // changing the icon in the button to a cross
    $($refHeaderQuickMenuButtonIcon).attr("src", "icons/header/close_red.svg").css({
      "transform":"rotate(-180deg)"
    });
    // changing the text color to red
    $($refHeaderQuickMenuButtonText).css({
      "color":"rgb(255,0,60)"
    });
    // showing the menu
    $($refQuickMenu).css({
      "transform":"none"
    });
  }
}

function CloseMenu(yOffset, menu = $refMenu) {
  // setting the offset to where it was before opening the menu
  $(document).scrollTop(yOffset.val);

  // reversing everything
  if(menu == $refMenu) {
    $isMenuOpened = false;

    $($refHeaderMenuButtonIcon).attr("src", "icons/header/menu.svg").css({
      "transform":"none"
    });
    $($refHeaderMenuButtonText).css({
      "color":"rgb(0,0,0)"
    });
    $($refMenu).css({
      "transform":"translateX(-100%)"
    });
  } else {
    $isQuickMenuOpened = false;

    $($refHeaderQuickMenuButtonIcon).attr("src", "icons/header/quick.svg").css({
      "transform":"none"
    });
    $($refHeaderQuickMenuButtonText).css({
      "color":"rgb(0,0,0)"
    });
    $($refQuickMenu).css({
      "transform":"translateX(100%)"
    });
  }
}

$(function() {
  // creating a variable for storing the offset from the top of the site
  var yOffset = { val: 0 }; // a workaround to be able to pass by reference

  // creating variables that are going to determine if a certain menu is opened or not
  $isMenuOpened = false;
  $isQuickMenuOpened = false;

  // everytime the menu button is clicked
  $($refHeaderMenuButton).click(function() {
    // toggling the menu
    if($isMenuOpened == false) {
      OpenMenu(yOffset);
    } else {
      CloseMenu(yOffset);
    }

    // closing the quick menu if opened
    CloseMenu(yOffset, $refQuickMenu);

    // closing all sub menus
    $($refSubMenu).each(function(){
      CloseSubMenu();
    });
  });

  $($refHeaderQuickMenuButton).click(function() {
    // toggling the menu
    if($isQuickMenuOpened == false) {
      OpenMenu(yOffset, $refQuickMenu);
    } else {
      CloseMenu(yOffset, $refQuickMenu);
    }

    // closing the menu if opened
    CloseMenu(yOffset);

    // closing all sub menus
    $($refSubMenu).each(function(){
      CloseSubMenu();
    });
  });
});
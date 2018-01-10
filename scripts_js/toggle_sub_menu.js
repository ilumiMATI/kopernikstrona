function OpenSubMenu() {
  // showing the sub menu
  $($refSubMenu).css({
    "top":"55px"
  });
  // showing the sub menu bottom bar
  $($refSubMenuBottomBar).css({
    "bottom":"0px"
  });
}

function CloseSubMenu() {
  // reversing everything
  $($refSubMenu).css({
    "top":"calc(-100% + 55px)"
  });
  $($refSubMenuBottomBar).css({
    "bottom":"100%"
  });
}

$(function() {
  // opening menu when the menu button is clicked
  $($refMenuButton).click(function() {
    OpenSubMenu();
  });

  // closing the menu when sub menu close button is clicked
  $($refSubMenuCloseButton).click(function(){
    CloseSubMenu();
  });
});
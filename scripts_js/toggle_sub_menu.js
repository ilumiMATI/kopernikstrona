function OpenSubMenu(event) {
  // getting the references of clicked menu button's sub menu and sub menu's bottom bar
  var subMenu    = event.delegateTarget.nextSibling.nextSibling;
  var subMenuBar = subMenu.nextSibling.nextSibling;

  // showing the sub menu
  $(subMenu).css({
    "transform":"none"
  });
  // showing the sub menus bottom bar
  $(subMenuBar).css({
    "transform":"none"
  });
}

function CloseSubMenu() {
  // reversing everything
  $($refSubMenu).css({
    "transform":"translateY(-100%)"
  });
  $($refSubMenuBottomBar).css({
    "transform":"translateY(100%)"
  });
}

$(function() {
  // opening menu when the menu button is clicked
  $($refMenuButton).click(function(event) {
    OpenSubMenu(event);
  });

  // closing the menu when sub menu close button is clicked
  $($refSubMenuCloseButton).click(function(){
    CloseSubMenu();
  });
});
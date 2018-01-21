function OpenSubMenu(subMenu) {
  // getting the reference of the bar of sub menu that's being opened
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
  $($refSubMenuBar).css({
    "transform":"translateY(100%)"
  });
}

$(function() {
  // opening menu when the menu button is clicked
  $($refMenuButton).click(function(event) {
    $(event.delegateTarget).parent().children($refMenuButton).each(function(index, element) {
      if(element == event.delegateTarget) {
        $(event.delegateTarget).parent().parent().parent().children($refSubMenu).each(function(subIndex, subElement) {
          if(index == subIndex) {
            OpenSubMenu(subElement);
          }
        });
      }
    });
  });

  // closing the sub menu when sub menu close button is clicked
  $($refSubMenuCloseButton).click(function(){
    console.info($refSubMenuCloseButton);
    $($refSubMenu).each(function(){
      CloseSubMenu();
    });
  });
});
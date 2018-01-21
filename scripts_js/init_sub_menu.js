$(function() {
  $($refMenuButton).each(function(index, element) {
    // getting the menu buttons properties
    var menuButton      = element;
    var menuButtonColor = $(menuButton).css("background-color");
    var menuButtonImg   = $(menuButton).children(".c-menu__button-image").attr("src");
    menuButtonImg = menuButtonImg.replace("menu", "menu/black");
    var menuButtonTitle = $(menuButton).children(".c-menu__button-title").text();

    // looping through sub menus
    $($refSubMenu).each(function(subIndex, subElement) {
      // checking if it's the sub menu connected with the button on which the external loop is on
      if(index == subIndex) {
        // getting the sub menus properties
        var subMenu    = subElement;
        var subMenuBar = subMenu.nextSibling.nextSibling;
        var subMenuBarImgElem = 
          $(subMenuBar)
            .children(".o-bar__title-wrapper")
            .children(".o-bar__img-wrapper")
            .children(".o-bar__img");
        var subMenuBarTitleElem =
          $(subMenuBar)
            .children(".o-bar__title-wrapper")
            .children(".o-bar__title");
      
        // changing the sub menus properties with menu buttons properties
        $(subMenu).css("background-color", menuButtonColor);
        $(subMenuBarImgElem).attr("src", menuButtonImg);
        $(subMenuBarTitleElem).text(menuButtonTitle);
      }
    });
  });
});
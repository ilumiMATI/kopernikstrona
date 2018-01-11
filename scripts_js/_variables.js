/* Sizes and references shared across files */

// making sure the site is already fully loaded
$(function(){

  /* sizes */
    // vertical sizes of elements
    $sizeVrWin         = $(window).height();
    $sizeVrOuterHeader = $("header").outerHeight();
    $sizeVrOuterMenu   = $(".o-menu-content").outerHeight();
    $sizeVrMainWrapper = $("main").height();
    $sizeVrFooter      = $("footer").height();
    console.log("Main wrapper size: " + $sizeVrMainWrapper);
    console.log("Footer size: "       + $sizeVrFooter);

      // calculating the heights everytime the site is resized
      $(window).on("resize", function() {
        $sizeVrWin         = $(window).height();
        $sizeVrOuterHeader = $("header").outerHeight();
        $sizeVrOuterMenu   = $(".o-menu-content").outerHeight();
        $sizeVrMainWrapper = $("main").height();
        $sizeVrFooter      = $("footer").height();
        console.log("----------");
        console.log("Window size: " + $sizeVrWin);
        console.log("Header size: " + $sizeVrOuterHeader);
        console.log("Menu size: "   + $sizeVrOuterMenu);
      });

  /* references */

    // header buttons for menu and menu
    $refHeaderMenuButton     = ".js-header-menu-button";
    $refHeaderMenuButtonIcon = ".js-header-menu-button__icon";
    $refHeaderMenuButtonText = ".js-header-menu-button__text";
    $refMenu = ".js-menu";

    // menu buttons for sub menu and sub menu
    $refMenuButton = ".js-menu-button";
    $refSubMenu    = ".js-sub-menu";
    $refSubMenuBottomBar   = ".js-sub-menu-bottom-bar"
    $refSubMenuCloseButton = ".js-sub-menu-close-button"

});
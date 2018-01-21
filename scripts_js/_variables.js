/* Sizes and references shared across files */

// making sure the site is already fully loaded
$(function(){

  console.log("[LOG] Preparing to launch the site...");
  console.log("[LOG] Initializing variables...");

  /* sizes */
    // vertical sizes of elements
    $sizeVrWin         = $(window).height();
    $sizeVrOuterHeader = $("header").outerHeight();
    $sizeVrOuterMenu   = $(".o-menu-content").outerHeight();
    $sizeVrMainWrapper = $("main").height();
    $sizeVrFooter      = $("footer").height();

    console.log("[INFO] Window size:         " + $sizeVrWin);
    console.log("[INFO] Outer Header size:   " + $sizeVrOuterHeader);
    console.log("[INFO] Outer Menu size:     " + $sizeVrOuterMenu);
    console.log("[INFO] Main wrapper size:   " + $sizeVrMainWrapper);
    console.log("[INFO] Footer size:         " + $sizeVrFooter);

      // calculating the heights everytime the site is resized
      $(window).on("resize", function() {
        $sizeVrWin         = $(window).height();
        $sizeVrOuterHeader = $("header").outerHeight();
        $sizeVrOuterMenu   = $(".o-menu-content").outerHeight();
        $sizeVrMainWrapper = $("main").height();
        $sizeVrFooter      = $("footer").height();

        console.log("[INFO] Window size:       " + $sizeVrWin);
        console.log("[INFO] Outer Header size: " + $sizeVrOuterHeader);
        console.log("[INFO] Outer Menu size:   " + $sizeVrOuterMenu);
        console.log("[INFO] Main wrapper size: " + $sizeVrMainWrapper);
        console.log("[INFO] Footer size:       " + $sizeVrFooter);
      });

  /* references */
    // header buttons for menus
    $refHeaderMenuButton     = ".js-header-menu-button";
    $refHeaderMenuButtonIcon = ".js-header-menu-button-icon";
    $refHeaderMenuButtonText = ".js-header-menu-button-text";

    $refHeaderQuickMenuButton     = ".js-header-quick-menu-button";
    $refHeaderQuickMenuButtonIcon = ".js-header-quick-menu-button-icon";
    $refHeaderQuickMenuButtonText = ".js-header-quick-menu-button-text";

    // menus (and their items)
    $refMenu       = ".js-menu";
    $refQuickMenu  = ".js-quick-menu";

    $refMenuButton = ".js-menu-button";

    // sub menu (and its items)
    $refSubMenu = ".js-sub-menu";

    // sub menu bar
    $refSubMenuBar = ".js-sub-menu-bar";
    $refSubMenuCloseButton = ".js-sub-menu-close-button";

  console.log("[LOG] Variables initalized!");
  console.log(" ");
});
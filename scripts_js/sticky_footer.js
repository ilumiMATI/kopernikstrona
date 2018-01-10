function StickyFooter() {
  // checking if the header + #main-wrapper + footer is smaller then the window
  // if that happens there there is a blank gap under the footer, we don't want that
  if(($sizeVrOuterHeader + $sizeVrMainWrapper + $sizeVrFooter) < $sizeVrWin) {
    // moving footer to the bottom
    $("footer").css({
      "position":"fixed",
      "bottom":"0",
      "left":"0"
    });
  } else {
    // bringing footer back to the normal flow
    $("footer").css({
      "position":"static"
    });
  }
}

$(function() {
  // calling StickyFooter when the site loads
  StickyFooter();

  // calling StickyFooter every time the window is resized
  $(window).on("resize", function() {
    StickyFooter();
  });
});

function StickyFooter() {
  // creating variables for storing needed sizes
  $sizeVrWin    = $(window).height();
  $sizeVrHeader = $("header").height();
  $sizeVrMainWrapper = $("main").height();
  $sizeVrFooter = $("footer").height();

  // checking if the header + #main-wrapper + footer is smaller then the window
  // if that happens there there is a blank gap under the footer, we don't want that
  if(($sizeVrHeader + $sizeVrMainWrapper + $sizeVrFooter) < $sizeVrWin) {
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

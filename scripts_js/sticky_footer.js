// sticky-footer function
$(function() {
  // creating variables for storing needed sizes
  $sizeVrWin = $(window).height();
  $sizeVrMainWrapper = $("#main-wrapper").height();
  $sizeVrFooter = $("footer").height();
  console.log("window size: " + $sizeVrWin);
  console.log("main-wrapper size: " + $sizeVrMainWrapper);
  console.log("footer size: " + $sizeVrFooter);
  // checking if the footer + wrapper is smaller then the window
  // if so, it creates a gap underneath
  // then change the footer to be on the bottom
  if(($sizeVrFooter + $sizeVrMainWrapper) <= $sizeVrWin) {
    $("footer").css({
      "position":"fixed",
      "bottom":"0px",
      "left":"0px"
    });
  }
});

// Draw the SVG
var snap = function(id, width, height) {

  // Init Snap
  var paper = Snap(id).attr({
    viewBox: "0 0 " + width + " " + height
  });

  // The number of vertical points
  var points = 7;

  // Draw the vertical rulers
  for (var i = 1; i <= points; i++ ) {
    var y = (height / points) * i;
    paper.line(0, y, width, y);
  }

}

// Document.ready ....
window.onload = function() {
  snap('.svg--landscape', 1366, 768);
  snap('.svg--portrait', 768, 1024);
};

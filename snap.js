// Draw the SVG
var snap = function(id, width, height) {

  // Init Snap
  var paper = Snap(id).attr({
    viewBox: "0 0 " + width + " " + height
  });

  // Settings
  // - the number of vertical points (senses)
  var points = 8;

  // - the names of senses
  var senses = [
    'position',
    'motion',
    'irritability',
    'reflex',
    'association',
    'thought',
    'culture',
    'next'
  ];

  // - the radius of the sense circle
  var radius = 10;



  // Draw the vertical rulers
  var rulers = [];
  for (var i = 1; i <= points; i++ ) {
    var y = (height / points) * i;
    rulers[i-1] = paper.path("M0," + y + "H" + width).attr({
      class: "ruler-" + i
    });
  }

  // Draw the diagonal
  var diagonal = paper.path("M0," + height + "L" + width + ",0").attr({
    class: 'diagonal'
  });

  // Draw circles at the intersection of rulers with diagonal
  var circles = [];
  for (var i = 0; i < points; i++ ) {
    var intersection = Snap.path.intersection(diagonal, rulers[i]);
    circles[i] = paper.circle(intersection[0].x, intersection[0].y, radius).attr({
      class: "sense--" + senses[points - i - 1]
    });
  }
}

// Document.ready ....
window.onload = function() {
  snap('.svg--landscape', 1366, 768);
  //snap('.svg--portrait', 768, 1024);
};

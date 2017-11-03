function drawTree (h) {
  for (var i = 1; i <= h; i++) {
    var star = '';
      for (var j = i; j <= h; j++) {
      star += '*';
    }
    console.log(star)
      }
}
drawTree(3)
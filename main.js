const player = {
  points: new Decimal(0)
}
function addpoint() {
  player.points=Decimal.add(player.points,1)
  document.getElementById('point').innerHTML = 'Points: ' + player.points;
}

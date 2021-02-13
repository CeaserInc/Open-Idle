var player = {
    points:new Decimal(0),
};
function add(){
    player.points+=1;
    document.getElementById('point').innerHTML="Points: "+player.points;
}
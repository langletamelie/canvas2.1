var cvs =  document.getElementById('iceCreamCanvas');
var ctx = cvs.getContext('2d');
//cone de glace//
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(300,150);
ctx.lineTo(225,350);
ctx.fillStyle = '#AA6522';
ctx.fill();
//boule de glace//
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="brown";
ctx.moveTo(150,150);
ctx.quadraticCurveTo(240,1,300,150);
ctx.fill();

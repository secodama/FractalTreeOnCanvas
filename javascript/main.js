$(function(){
    $("#level").change(function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// get level
	var n = Number($(this).val());
	// determine branch length
	var l = n + 20;
	// determine canvas size
	canvas.height = l * n;
	canvas.width = l * n * 2;
	// draw tree
	drawTree(n, canvas.width/2, canvas.height, l, 0, ctx);
    });
});

function drawTree(n, x, y, l, deg, ctx){
    if(n == 0){
	// do nothing
    }
    else {
	var degrees = [-15 , 15];
	for(var i = 0; i < degrees.length; i++){
	    var rad = (deg+degrees[i]) * (Math.PI/180);
	    var dx = Math.sin(rad)*l;
	    var dy = Math.cos(rad)*l;
	    ctx.beginPath();
	    ctx.moveTo(x, y);
	    ctx.lineTo(x+dx, y-dy);
	    ctx.stroke();
	    drawTree(n-1, x+dx, y-dy, l-1, deg+degrees[i], ctx);
	}
    }
}

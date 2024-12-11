function drawGrid(){
    var c = document.getElementById("background");
    var ctx = c.getContext("2d");
    for (var index = 0; index < c.clientHeight; index += 50) {
        ctx.beginPath();
        ctx.moveTo(index, 0);
        ctx.lineTo(index, c.clientHeight);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, index);
        ctx.lineTo(100, index);
        ctx.stroke();
    }
}

drawGrid();
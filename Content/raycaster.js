function drawGrid(){
    var c = document.getElementById("topview");
    var ctx = c.getContext("2d");
    for (var index = 50; index < 550; index += 50) {
        ctx.beginPath();
        ctx.moveTo(index, 0);
        ctx.lineTo(index, 550);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, index);
        ctx.lineTo(550, index);
        ctx.stroke();
    }
}

function drawPlayer(){
    var c = document.getElementById("topview");
    var ctx = c.getContext("2d");
}

drawGrid();
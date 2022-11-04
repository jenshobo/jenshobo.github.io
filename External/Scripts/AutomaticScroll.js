window.onload = function() {
    var elem = [];
    elem.push(document.getElementById('OuterLeft').style);
    elem.push(document.getElementById('InnerLeft').style);
    elem.push(document.getElementById('Middle').style);
    elem.push(document.getElementById('InnerRight').style);
    elem.push(document.getElementById('OuterRight').style);

    var pos = [];
    pos.push(-50);
    pos.push(-200);
    pos.push(-50);
    pos.push(-200);
    pos.push(-50);

    var speed = [];
    speed.push(.5);
    speed.push(1);
    speed.push(1.5);
    speed.push(1);
    speed.push(.5);

    if (elem != null){
        timer = setInterval(function() {
            pos[0] -= speed[0];
            pos[1] -= speed[1];
            pos[2] -= speed[2];
            pos[3] -= speed[3];
            pos[4] -= speed[4];

            elem[0].top = pos[0]+"px";
            elem[1].top = pos[1]+"px";
            elem[2].top = pos[2]+"px";
            elem[3].top = pos[3]+"px";
            elem[4].top = pos[4]+"px";

            if (pos[0] <= -1315) pos[0] = -50;
            if (pos[1] <= -1460) pos[1] = -200
            if (pos[2] <= -1315) pos[2] = -50;
            if (pos[3] <= -1460) pos[3] = -200
            if (pos[4] <= -1315) pos[4] = -50;
        },  50);
    }
};
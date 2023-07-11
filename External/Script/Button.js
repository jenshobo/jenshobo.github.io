var all = document.getElementsByTagName("input");

for (var i=0, max=all.length; i < max; i++) {
     all[i].onclick = function(){
        url = this.getAttribute('title');
        let start = Date.now(); // remember start time

        let timer = setInterval(function() {
        // how much time passed from the start?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // finish the animation after 1 seconds
            
            // check for 'http' to determine if link is internal or external
            // external links are to be opened on a new browser winow
            // internal links are to replace the current page
            if (url.includes("http")){
                window.open(url); // open external link
            }
            else{
                window.open(url, "_self"); // open internal link
            }
        }

        // draw the animation at the moment timePassed
        draw(timePassed);

        }, 20);

        // as timePassed goes from 0 to 1000
        function draw(timePassed) {
            if (timePassed > 30){
                document.getElementById("Header").style.height = timePassed / 10 + '%';
            }
        }
     }
}
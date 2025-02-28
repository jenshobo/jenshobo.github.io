fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('Footer').innerHTML = data;
    })

fetch('./header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('Header').innerHTML = data;
        initButtons();
    })

function initButtons() {
  var all = document.getElementsByClassName("button-image");

  for (var i = 0; i < all.length; i++)
    initButton(all[i]);

  var rest = document.getElementsByTagName('input')

  for (var i = 0; i < rest.length; i++)
    initButton(rest[i]);
}

function initButton(button) {
  button.onclick = function() {
    var url = this.getAttribute('title');
    var background = this.getAttribute('background');

    if (url.includes("http") || url.includes("mailto")){
      window.open(url);
      return;
    }

    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      if (timePassed >= 1000) {
        clearInterval(timer);
    
        if (url.includes(".html")) {
          window.open(url, "_self");
        }
        else {
          sessionStorage.setItem("MD_FILE", url);
          sessionStorage.setItem("BACKGROUND", background);
          window.open('./genericWork.html', "_self");
        }
      }

      draw(timePassed);

    }, 20);

    function draw(timePassed) {
      if (timePassed > 30){
        document.getElementById("Header").style.height = timePassed / 10 + '%';
      }
    }
  };
}
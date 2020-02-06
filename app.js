var alkuarvot = {video: {facingMode: "user"}, audio: false};
var track = null;

var kamerakuva = document.getElementById("kamerakuva");
var kuvasijainti = document.getElementById("kuvasijainti");
var kameracanvas = document.getElementById("kameracanvas");
var laukaisin = document.getElementById("laukaisin");

function cameraStarttaa(){
    navigator.mediaDevices.getUserMedia(alkuarvot)
    .then(function(kuvavirta){ kamerakuva.srcObject = kuvavirta; })
    .catch(function(error){console.log("huppista")})
}

laukaisin.onclick =  function(){
    kameracanvas.width= kamerakuva.videoWidth;
    kameracanvas.height= kamerakuva.videoHeight;
    kameracanvas.getContext("2d").drawImage(kamerakuva, 0,0);
    kuvasijainti.src = kameracanvas.toDataURL("image/png");
    kameracanvas.hidden = true;
   // kuvasijainti.classList.add("kuvattu");
  // kuvasijainti.id = "otto";
  kuvasijainti.style.width = "100px";
  kuvasijainti.style.height = "100px"
  console.log(kuvasijainti.style.width);

}

window.addEventListener("load", cameraStarttaa);


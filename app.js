//kameran käsittelyyn tarvittavat alkuarvot muuttujaan
var alkuarvot = {video: {facingMode: "user"}, audio: false};

//html-elementeistä vakiot
const kamerakuva = document.getElementById("kamerakuva"),
 kuvasijainti = document.getElementById("kuvasijainti"),
 kameracanvas = document.getElementById("kameracanvas"),
 laukaisin = document.getElementById("laukaisin");

//Käynnistetään kamera mikäli sellainen on saatavilla
function cameraStarttaa(){
    navigator.mediaDevices.getUserMedia(alkuarvot)
    .then(function(kuvavirta){ kamerakuva.srcObject = kuvavirta; })
    .catch(function(error){console.log("huppista")})
}
//näppäimen tapahtumankäsittelijä. Voitaisiin käyttää myös addEventListeneriä
laukaisin.onclick =  function(){
    kameracanvas.width= kamerakuva.videoWidth;
    kameracanvas.height= kamerakuva.videoHeight;
    kameracanvas.getContext("2d").drawImage(kamerakuva, 0,0);
    kuvasijainti.src = kameracanvas.toDataURL("image/png");
    kameracanvas.hidden = true;
    kuvasijainti.classList.add("kuvattu");

}
//Kuuntelija, kun sisältö ladattu, kutsutaan funktio
window.addEventListener("load", cameraStarttaa);


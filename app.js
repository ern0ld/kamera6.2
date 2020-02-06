var alkuarvot = {video: { facingMode:"user"}, audio: false};
var track = null;

const kamerakuva = document.getElementById("kamerakuva"),
kuvasijainti = document.getElementById("kuvasijainti"),
kameracanvas = document.getElementById("kameracanvas"),
laukaisin = document.getElementById("laukaisin"),

audio = document.getElementById("audio");

function cameraStart(){
    if(navigator.mediaDevices){
   navigator.mediaDevices.getUserMedia(alkuarvot).then(function(virta) {track = virta.getTracks()[0];  kamerakuva.srcObject = virta})
    
   .catch(function(error){
        consoler.error("hupsista");
    })
}
    navigator.mediaDevices.enumerateDevices().then(function(devices) {devices.forEach(function(device) {console.log(device.kind + " " + device.label) })})

}
laukaisin.onclick = function(){
    kameracanvas.width = kamerakuva.videoWidth;
    kameracanvas.height = kamerakuva.videoHeight;
    kameracanvas.getContext("2d").drawImage(kamerakuva, 0,0);
    kuvasijainti.src = kameracanvas.toDataURL("image/png");
    

};

window.addEventListener("load", cameraStart, false)
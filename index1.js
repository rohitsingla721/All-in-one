for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",handclick);
  function handclick(){
var n1=this.innerHTML;
switch (n1) {
  case "w":
  var n1 = new Audio("Chaand Baaliyan - Aditya A.mp3");
  audio.play();
case "a":
n1.pause();
var audio = new Audio("Qaafirana Kedarnath.mp3");
audio.play();
    break;
  default:console.log(n1);

}
  }
}

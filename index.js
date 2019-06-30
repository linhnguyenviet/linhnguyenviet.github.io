
var $ = function (id) {
  return document.getElementById(id);
}

 
function showMenu() {
    var nav = document.getElementById("main");
    if(nav.style.display=="none")
    nav.style.display = "block";
    else nav.style.display="none";
}
window.onload = function () {
  $("resume").onclick = function() {
    $("cv").classList.add("slideInTop")
  }
}



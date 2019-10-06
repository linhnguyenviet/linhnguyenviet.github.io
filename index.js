
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
  $(document).ready(function() {
    $("#nav--mobile ul").hide();

    $(".fa-bars").click(function() {
        $("#nav--mobile ul").toggle();
    })

    $("#toResume").click(function scrolling() {
        if (window.innerWidth >= 768 )
        window.scrollTo(0, 300+window.innerWidth/2);
        else if (window.innerWidth < 768 && window.innerWidth >= 600) 
        window.scrollTo(0, 430+window.innerWidth/2);
        else window.scrollTo(0, 700+window.innerWidth/2);
    });

    $(".scroll").click(function scrolling() {
        if (window.scrollY > 0) {
            setTimeout(function() {
                window.scrollTo(0, window.scrollY - 30);
                scrolling();
            }, 6);
        };
    });

});
}



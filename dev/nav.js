document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("openNav()").addEventListener("click", openNav);
  document.getElementById("closeNav()").addEventListener("click", closeNav);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}
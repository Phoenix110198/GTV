function openNav(){
    document.getElementById("mySidenav").style.width="250px";
}

function closeNav(){
    document.getElementById("mySidenav").style.width="0";
}

// Sign In
var modal=document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}
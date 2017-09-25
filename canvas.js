
$(document).ready(function(){

    var mycanvas = document.getElementById("mycanvas");
    var ctx = mycanvas.getContext("2d");
    
    function kafa() {

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(50, 50, 30, 0 * Math.PI, 2 * Math.PI);
        ctx.fill();
    }



});

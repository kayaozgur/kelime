$(document).ready(function(){

    var abc = "A B C Ç D E F G Ğ H İ I J K L M N O Ö P R S Ş T U Ü V Y Z";
    var klm = prompt("kelimeyi giriniz..")
    
    var kelime = klm.split("");

        var alfabe = abc.split(" ");
    
        for (var i = 0; i < alfabe.length; i++) {
    
            var buton = document.createElement("button");
    
            buton.innerHTML = alfabe[i];
                       
            document.getElementById('ust').appendChild(buton);
            buton.onclick = function () {

              
                    $(this).css("background", "red");
                  
                
                
            };
    
    
        };

        for (var i = 0; i < kelime.length; i++) {
           
                 var buton = document.createElement("button");
             
                    buton.innerHTML = kelime[i];
                    if (buton.getAttribute == "") { buton.style.background = "red";}                   
                    document.getElementById('ortasol').appendChild(buton);
                    buton.onclick = function () {
        
                      
                            $(this).css("background", "red");
                            
                        
                        
                    };
            
            
        }
        var mycanvas = document.getElementById("mycanvas");
        var ctx = mycanvas.getContext("2d");
        
        function kafa() {
    
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.arc(100, 100, 30, 0 * Math.PI, 2 * Math.PI);
            ctx.moveTo(100,150);
            ctx.lineTo(100,250);
            ctx.stroke();
        }

        function govde() {
                
                        ctx.beginPath();
                        ctx.strokeStyle = "red";
                        ctx.moveTo(100,130);
                        ctx.lineTo(100,250);
                        ctx.stroke();
                    }
        kafa();
        govde();

});

   










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
                                        
                    document.getElementById('ortasol').appendChild(buton);
                    buton.onclick = function () {
        
                      
                            $(this).css("background", "red");
                        
                        
                    };
            
            
        }
    

});

   










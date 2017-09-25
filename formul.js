window.onload = function(){



var alfabe = ["A","B","C","Ç","D","E","F","G"]

for(var i = 0; i< alfabe.length;i++){

    var buton = document.createElement("button");
    buton.id = "buton"+i;
    buton.innerHTML = alfabe[i];
    buton.style.margin = "10px" ;
    buton.style.fontSize = "25px";
    buton.onclick = islem();
    
    document.body.appendChild(buton);
    

}

function islem() {
 buton.style.backgroundColor = "yellow";

}


};
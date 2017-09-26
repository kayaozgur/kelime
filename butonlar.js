$(document).ready(function () {

        var abc = "A B C Ç D E F G Ğ H İ I J K L M N O Ö P R S Ş T U Ü V Y Z";
        var klm = prompt("kelimeyi giriniz..")

        var kelime = klm.split("");

        var alfabe = abc.split(" ");

        for (var i = 0; i < alfabe.length; i++) {

                var butonAbc = document.createElement("button");

                butonAbc.innerHTML = alfabe[i];

                document.getElementById('ust').appendChild(butonAbc);
                butonAbc.onclick = function () {

                        $(this).css("background", "red");
                        
                        var hata = 0;
                        var harf = $(this).text();

                        for (var i = 0 ; i < klm.length; i++) {

                                if(harf == klm[i]) {
                                        $('#'+i).text(harf);
                                }else {

                                        hata++;


                                }


                        }

                        console.log(hata); 


                };


        };

        for (var i = 0; i < kelime.length; i++) {

                var butonKelime = document.createElement("button");
                butonKelime.id = i;
                if (kelime[i] == " ") {
                        butonKelime.style.background = "black";

                }

                document.getElementById('ortasol').appendChild(butonKelime);


        }


        var mycanvas = document.getElementById('mycanvas');
        var ctx = mycanvas.getContext('2d');

        function kafa() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(300, 80, 30, 0 * Math.PI, 2 * Math.PI);
                ctx.stroke();
        }

        function govde() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;
            ctx.moveTo(300,110);
            ctx.lineTo(300,250);
            ctx.stroke();
    }

    function sagayak() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(300,250);
            ctx.lineTo(250,300);
            ctx.stroke();
    }

    function solayak() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(300,250);
            ctx.lineTo(350,300);
            ctx.stroke();
    }

    function sagel() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(300,150);
            ctx.lineTo(250,200);
            ctx.stroke();
    }

    function solel() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(300,150);
            ctx.lineTo(350,200);
            ctx.stroke();
    }

    function zemin() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(150,300);
            ctx.lineTo(200,300);
            ctx.stroke();
    }

       function direkgovde() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(175,20);
            ctx.lineTo(175,300);
            ctx.stroke();
    }

        function direkuc() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(173,20);
            ctx.lineTo(320,20);
            ctx.stroke();
    }

        function ip() {

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(300,20);
            ctx.lineTo(300,50);
            ctx.stroke();
    }



    kafa();
    govde();
    sagayak();
    solayak();
    sagel();
    solel();
    zemin();
    direkgovde();
    direkuc();
    ip();

});












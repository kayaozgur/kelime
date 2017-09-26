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
                        var harf, index;
                        harf = $(this).text();
                        index = klm.indexOf(harf);

                        if (index != -1) {
                                $('#' + index).text(harf);
                        }



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



});












function YeniKelimeGetir() {
    var a = PageMethods.RandomKelime(onSucess, onError);
    function onSucess(result) {
        document.getElementById("Label1").innerHTML = result.toString();
    }
    function onError(result) {
        alert('birşeyler yanlış gitti!');
    }  
}
var B_sayac = 0;
var Basarsiz_s = 0;
var bgecilen_s = 0;
window.addEventListener("keydown", textareabasildi, false);
function textareabasildi(key) {
    if (key.keyCode == 13 || key.keyCode == 9) {
        var BasariliKelime = []; // kelimelerimizi dizin içinde tutuyoruz, belki ileride lazım olur
        var BasarisizKelime = [];
        var BosGecilenKelime = [];
        var Randomgelenkelime = document.getElementById("Label1").innerHTML;
        var bizimkelimemiz = document.getElementById("txtbox2").value;
        if (bizimkelimemiz != "") {
            if (Randomgelenkelime == bizimkelimemiz) {
                BasariliKelime.push(bizimkelimemiz);
                B_sayac++;
                var ul = document.getElementById("basarili");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(Randomgelenkelime));
                li.setAttribute("id", "list-group-item");
                ul.appendChild(li);
                document.getElementById("Basarili_Sayac").innerHTML = B_sayac;
            }
            else {
                BasarisizKelime.push(bizimkelimemiz);
                Basarsiz_s++;
                var ul = document.getElementById("basarisiz");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode("Yazılması gereken: " + Randomgelenkelime + " Yazılan: " + bizimkelimemiz));
                li.setAttribute("id", "list-group-item");
                ul.appendChild(li);
                document.getElementById("Basarisiz_Sayac").innerHTML = Basarsiz_s;
            }
        }
        else {
            BosGecilenKelime.push(Randomgelenkelime);
            bgecilen_s++;
            var ul = document.getElementById("bos");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(Randomgelenkelime));
            li.setAttribute("id", "list-group-item");
            ul.appendChild(li);
            document.getElementById("Bos_Sayac").innerHTML = bgecilen_s;
        }
        YeniKelimeGetir();
        key.preventDefault();
        document.getElementById("txtbox2").value = null;
    }
}
var saniyemiz = 60;
var Saniyetimer = setInterval(function () {
    if (document.getElementById("txtbox2").value != "") {
        
        if (saniyemiz == 1) {
            alert("Zamanınız doldu!");
            document.getElementById("saat").innerHTML = "60";
            document.getElementById("txtbox2").value = "";
            YeniKelimeGetir();
            if (confirm("Sıfırlamak icin OK tuşuna basın")) {
                var basarili = document.getElementById("basarili");
                var basarisiz = document.getElementById("basarisiz");
                var bos = document.getElementById("bos");
                basarili.innerHTML = "";
                basarisiz.innerHTML = "";
                bos.innerHTML = "";
                bossayac = 0;
                B_sayac = 0;
                basarisizsayac = 0;
                var Basarilisayac = document.getElementById("Basarili_Sayac");
                var basarisizsayac = document.getElementById("Basarisiz_Sayac");
                var bossayac = document.getElementById("Bos_Sayac");

                basarisizsayac.innerHTML = "0";
                Basarilisayac.innerHTML = "0";
                bossayac.innerHTML = "0";
                saniyemiz = 60;
            }
            else {
                console.log("sıfırlama");
            }
        }
        else if (saniyemiz>1) {
            document.getElementById("saat").innerHTML = saniyemiz;
            saniyemiz--;
        }
    }
 
}, 1000);
var myVar = setInterval(Timer, 1000);
function Timer() {
    var disardangelen = document.getElementById("Label1").innerHTML;
    var girilenkelime = document.getElementById("txtbox2").value.toLowerCase();
    if (girilenkelime != "" && a!="") {
        var char1 = [];
        var char2 = [];
        for (var i = 0; i < disardangelen.length; i++) {
            char1.push(disardangelen.charAt(i));
        }
        for (var z = 0; z < girilenkelime.length; z++) {
            char2.push(girilenkelime.charAt(z));
        }
        for (var a = 0; a < char2.length; a++) {
            if (char1[a] == char2[a]) {
                document.getElementById("txtbox2").style.color = "green";
            }
            else {
                document.getElementById("txtbox2").style.color = "red";
                break;
            }
        }
    }
}

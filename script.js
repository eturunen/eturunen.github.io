

/*funktio mobiilinaville*/
function myFunction() {
    var x = document.getElementById("navigointi");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*toiminnallisuus navigoinnin piilottamiselle*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigointi").style.top = "0";
    } else {
        document.getElementById("navigointi").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

/*toiminnallisuus lomakkeen tarkistukseen*/

function tarkista() {

    if ((!document.getElementById("area1").value == '') &&
        (!document.getElementById("area2").value == '')) {
        alert("Kiitos vastauksestasi!");
    }
}

/*toiminnallisuus navbarin scrollaustoimintoon*/

$('#yksi').addClass("aktiivinen");

$("#yksi").click(function () {
    $('html, body').animate({
        scrollTop: $("#koulutus").offset().top - 66
    }, 1000);
    return false;
});

$('#kaksi').addClass("aktiivinen");

$("#kaksi").click(function () {
    $('html, body').animate({
        scrollTop: $("#tyokokemus").offset().top - 66
    }, 1000);
    return false;
});

$('#kolme').addClass("aktiivinen");

$("#kolme").click(function () {
    $('html, body').animate({
        scrollTop: $("#taidot").offset().top - 66
    }, 1000);
    return false;
});

$('#nelja').addClass("aktiivinen");

$("#nelja").click(function () {
    $('html, body').animate({
        scrollTop: $("#otayhteytta").offset().top - 66
    }, 1000);
    return false;
});

$('#viisi').addClass("aktiivinen");

$("#viisi").click(function () {
    $('html, body').animate({
        scrollTop: $("#profiili").offset().top - 66
    }, 1000);
    return false;
});

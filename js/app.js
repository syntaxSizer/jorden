//$(document).foundation()
//$(function () {
//    $('a[href*="#"]:not([href="#"])').click(function () {
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//            if (target.length) {
//                $('html, body').animate({
//                    scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
//});




 var num = -1, count;

$('#this').hover(startCounter);


function startCounter(){


    $("#myID").html( ++num );
    count = setTimeout(startCounter, 1000);
}




function stopCounter() {
    clearInterval(count);
}




var num2 = -1 ,counter2;

$('#fav').hover(startCounter2);


function startCounter2(){



    $("#location").html( ++num2 );
    count = setTimeout(startCounter2, 1000);
}


function stopCounter2() {
    clearInterval(counter2);
}

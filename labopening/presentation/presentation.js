$( window ).resize(function() {
    $("#centreText1").css('left',($(window).width()/2)- ($("#centreText1").width()/2));
    $("#centreText1").css('top',($(window).height()/2)- ($("#centreText1").height()/2)-100);
    $("#centreText2").css('left',($(window).width()/2)- ($("#centreText2").width()/2));
    $("#centreText2").css('top',($(window).height()/2)- ($("#centreText2").height()/2)+100);
    $("#centreText3").css('left',($(window).width()/2)- ($("#centreText3").width()/2));
    $("#centreText3").css('top',($(window).height()/2)- ($("#centreText3").height()/2)+100);
    $("#centreText4").css('left',($(window).width()/2)- ($("#centreText4").width()/2));
    $("#centreText4").css('top',($(window).height()/2)- ($("#centreText4").height()/2)+100);
    $("#centreText5").css('left',($(window).width()/2)- ($("#centreText5").width()/2));
    $("#centreText5").css('top',($(window).height()/2)- ($("#centreText5").height()/2)+100);
    $("#centreText6").css('left',($(window).width()/2)- ($("#centreText6").width()/2));
    $("#centreText6").css('top',($(window).height()/2)- ($("#centreText6").height()/2)+100);
    

    // $("#centreText4").css('left',($(window).width()/2)- ($("#centreText4").width()/2));
    // $("img").css('height',$(window).height()-250);
});

$(document).ready(function(){
    myFunction6();
    $("#centreText1").fadeTo(0,0,function() {});
    $("#centreText2").fadeTo(0,0,function() {});
    $("#centreText3").fadeTo(0,0,function() {});
    $("#centreText4").fadeTo(0,0,function() {});
    $("#centreText5").fadeTo(0,0,function() {});
    $("#centreText6").fadeTo(0,0,function() {});
    $("#centreText7").fadeTo(0,0,function() {});
    $("#centreText8").fadeTo(0,0,function() {});
    $("#centreText9").fadeTo(0,0,function() {});
    $("#logo1").fadeTo(0,0,function() {});
    $("#logo2").fadeTo(0,0,function() {});
    $("#logo3").fadeTo(0,0,function() {});
    $("#logo4").fadeTo(0,0,function() {});
    $("#logo5").fadeTo(0,0,function() {});
    $("#logo6").fadeTo(0,0,function() {});
    $("#logo7").fadeTo(0,0,function() {});
    $("#logo8").fadeTo(0,0,function() {});

    // $("#logo5").css('height',$(window).height()/1.5);

    $("#centreText1").css('left',($(window).width()/2)- ($("#centreText1").width()/2));
    $("#centreText1").css('top',($(window).height()/2)- ($("#centreText1").height()/2)-100);
    $("#centreText2").css('left',($(window).width()/2)- ($("#centreText2").width()/2));
    $("#centreText2").css('top',($(window).height()/2)- ($("#centreText2").height()/2)+100);
    $("#centreText3").css('left',($(window).width()/2)- ($("#centreText3").width()/2));
    $("#centreText3").css('top',($(window).height()/2)- ($("#centreText3").height()/2)+100);
    $("#centreText4").css('left',($(window).width()/2)- ($("#centreText4").width()/2));
    $("#centreText4").css('top',($(window).height()/2)- ($("#centreText4").height()/2)+100);
    $("#centreText5").css('left',($(window).width()/2)- ($("#centreText5").width()/2));
    $("#centreText5").css('top',($(window).height()/2)- ($("#centreText5").height()/2)+100);
    $("#centreText6").css('left',($(window).width()/2)- ($("#centreText6").width()/2));
    $("#centreText6").css('top',($(window).height()/2)- ($("#centreText6").height()/2)+100);
    $("#centreText7").css('left',($(window).width()/2)- ($("#centreText7").width()/2));
    // $("#logo5").css('left',($(window).width()/2)-($("#centreText6").width()/2));
    $("#centreText7").css('top','45%');

    $("#centreText1").delay(3000).animate({
          opacity: '1'
    });

    $("#centreText2").delay(4000).animate({
          opacity: '1'
    });
    $("#centreText2").delay(1000).animate({
          opacity: '0'
    });

    $("#centreText3").delay(7000).animate({
          opacity: '1'
    });
    $("#centreText3").delay(1000).animate({
          opacity: '0'
    });

    $("#centreText4").delay(10000).animate({
          opacity: '1'
    });
    $("#centreText4").delay(1000).animate({
          opacity: '0'
    });

    $("#centreText5").delay(13000).animate({
          opacity: '1'
    });
    $("#centreText5").delay(1000).animate({
          opacity: '0'
    });

    $("#centreText6").delay(16000).animate({
          opacity: '1'
    });

    $("#centreText1").delay(18000).animate({
          opacity: '0',
          top:'0'
    });
    $("#centreText6").delay(5000).animate({
          top: '45%'
    });
    $("html body").delay(21000).animate({
          backgroundColor : 'white'
    });
    $("p").delay(21000).animate({
          color : 'black'
    });

    // setTimeout(alert(), 4000);
    // setTimeout(moveit1(), 2000);
    // setTimeout(moveit2(), 2000);
    // setTimeout(moveit3(), 2000);
    // setTimeout(moveit4(), 2000);
    myFunction1()
    myFunction2()
    myFunction3()
    myFunction4()
    myFunction5()
    $("#centreText6").delay(10000).animate({
          left: '20%'
    });
    $("#centreText7").delay(32000).animate({
          opacity: '1'
    });

    $("#centreText6").delay(7000).animate({
          opacity: '0'
    });
    $("#centreText7").delay(9000).animate({
          opacity: '0'
    });

    $("html body").delay(21000).animate({
          backgroundColor : '#2c2934'
    });
    $("#logo5").delay(43000).animate({
          opacity: '1'
    });

    $("html body").delay(6000).animate({
          backgroundColor : 'white'
    });
    $("#logo5").delay(5000).animate({
          opacity: '0'
    });

    $("#logo6").delay(50000).animate({
          opacity: '1'
    });

    $("#logo6").delay(5000).animate({
          opacity: '0'
    });
    $("#centreText8").delay(57000).animate({
          opacity: '1'
    });

    $("#logo7").delay(57000).animate({
          opacity: '1'
    });

    $("#centreText8").delay(7000).animate({
          opacity: '0'
    });

    $("#logo7").delay(7000).animate({
          opacity: '0'
    });

    $("#centreText9").delay(65000).animate({
          opacity: '1'
    });

    $("#logo8").delay(65000).animate({
          opacity: '1'
    });
    $("html body").delay(15000).animate({
          backgroundColor : '#2d415c'
    });
    $("p").delay(43000).animate({
          color : 'white'
    });

    $("#centreText9").delay(15000).animate({
          opacity: '0'
    });

    $("#logo8").delay(15000).animate({
          opacity: '0'
    });

});
var minus=0;
 var r = 200;
function myFunction1() {
    myVar1 = setTimeout(moveit1, 23000);
}
function myFunction2() {
    myVar2 = setTimeout(moveit2, 24000);
}
function myFunction3() {
    myVar3 = setTimeout(moveit3, 25000);
}
function myFunction4() {
    myVar4 = setTimeout(moveit4, 26000);
}

function myFunction5() {
    myVar5 = setTimeout(minusfunc, 28000);
}
function myFunction6() {
    myVar6 = setTimeout(restart, 80000);
}
function minusfunc() {

    minus=1;
}

function restart() {
    window.location.assign("file:///E:/presentation/presentation.html")
}

var t1 = 0;

function moveit1() {
    t1 += 0.02;

    r-= minus;
    var xcenter = ($(window).width()/2)-50;
    var ycenter = ($(window).height()/2)-50;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t1)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t1)));
    $('#logo1').animate({
        opacity: 1,
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit1();
    });
}

var t2 = 0;

function moveit2() {
    t2 += 0.02;

    r-= minus;
    var xcenter = ($(window).width()/2)-50;
    var ycenter = ($(window).height()/2)-50;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t2)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t2)));
    $('#logo2').animate({
        opacity: 1,
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit2();
    });
}
var t3 = 0;
function moveit3() {
    t3 += 0.02;

    r-= minus;
    var xcenter = ($(window).width()/2)-50;
    var ycenter = ($(window).height()/2)-50;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t3)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t3)));
    $('#logo3').animate({
        opacity: 1,
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit3();
    });
}

var t4 = 0;
function moveit4() {
    t4 += 0.02;

    r-= minus;
    var xcenter = ($(window).width()/2)-50;
    var ycenter = ($(window).height()/2)-50;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t4)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t4)));
    $('#logo4').animate({
        opacity: 1,
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit4();
    });
}

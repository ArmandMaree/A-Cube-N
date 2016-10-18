$(document).ready(function() {
  $(".jumper").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);

  });
});

$(document).ready(function(){
    $("#unclutterlogo").delay(1000).animate({
          opacity: '1'
    });
    $(".underlogo").delay(2000).animate({
          opacity: '1'
    });
	var lastScrollTop = 0;
	changed =false;
	var userexpheaddone =false;
	var userexpparadone =false;
	$(window).scroll(function(event){
	    var st = $(this).scrollTop();
		    if(lastScrollTop > st){
			    ffa(1)
			    fgo(1)
			    ftw(1)
			    fln(1)

		    }else{
			    ffa(-1)
			    fgo(-1)
			    ftw(-1)
			    fln(-1)

		    	
		    }
	        var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
		        prop,
		        el = document.createElement('div');

		    for(var i = 0, l = props.length; i < l; i++) {
		        if(typeof el.style[props[i]] !== "undefined") {
		            prop = props[i];
		            break;
		        }
		    }
			Clock_dg(prop,st)
	        console.log("down "+st)
	        // text-shadow: 0 0 3px #FF0000;
	        if(st>=650){
	        	if($("#userexphead").css("opacity")==0){
		        	$("#userexphead").animate({
				          opacity: '1'
				    });
				}
	        }else{
	        	if($("#userexphead").css("opacity")==1){
		        	$("#userexphead").animate({
				          opacity: '0'
				    });
		        }
	        }
	        if(st>=750){
	        	if($("#userexppara").css("opacity")==0){
		        	$("#userexppara").animate({
				          opacity: '1'
				    });
				}
	        }else{
	        	if($("#userexppara").css("opacity")==1){
		        	$("#userexppara").animate({
				          opacity: '0'
				    });
		        }
	        }

	        if(st>1300 && st<1400){
	        	console.log("here")
	        	if($("#onepuzzle").css("opacity")==1){
		        	$("#onepuzzle").animate({
				          left: $("#puzzle").position().left+17
				    });
		        }
	        }
	        if(st>2500 && st<2600){
	        	if($("#onepuzzle").css("opacity")==1){
		        	$("#onepuzzle").animate({
				          left: 0
				    });
		        }
		    }
	        

	   lastScrollTop = st;
	});
});

function Clock_dg(prop,rotates) {
    var angle = 360/60,
        date = new Date();
        var h = date.getHours();
        if(h > 12) {
            h = h - 12;
        }

        hour = h;
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hourAngle = (360/12) * hour + (360/(12*60)) * minute;

        $('#minute')[0].style[prop] = 'rotate('+angle * minute+rotates+'deg)';
        $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
        $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
}
$(function(){        
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for(var i = 0, l = props.length; i < l; i++) {
        if(typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }
    var hello=1
    // setInterval(function(){
    //     Clock_dg(prop,hello++)
    // },100);
});

var faangle = 270;     // starting position (degrees)
var fadistance = 150; // distance of b from a
var faspeed = 600;    // revolution speed in degrees per second
var farate  = 10;    // refresh rate in ms

function ffa(i) {
    
    var o = $('#center').offset();
    
    var t = o.top + (fadistance * Math.sin(faangle * Math.PI/180.0));
    var l = o.left+ (fadistance * Math.cos(faangle * Math.PI/180.0));
    
    $('#facebook').css({
        top: t-3600,
        left: l+50
    });
    
    faangle += (faspeed * (farate/1000)) % 360*i;
}

var gaangle = 0;     // starting position (degrees)
var gadistance = 150; // distance of b from a
var gaspeed = 600;    // revolution speed in degrees per second
var garate  = 10;    // refresh rate in ms

function fgo(i) {
    
    var o = $('#center').offset();
    
    var t = o.top + (gadistance * Math.sin(gaangle * Math.PI/180.0));
    var l = o.left+ (gadistance * Math.cos(gaangle * Math.PI/180.0));
    
    $('#google').css({
        top: t-3600,
        left: l+50
    });
    
    gaangle += (gaspeed * (garate/1000)) % 360*i;
}

var twangle = 180;     // starting position (degrees)
var twdistance = 150; // distance of b from a
var twspeed = 600;    // revolution speed in degrees per second
var twrate  = 10;    // refresh rate in ms

function ftw(i) {
    
    var o = $('#center').offset();
    
    var t = o.top + (twdistance * Math.sin(twangle * Math.PI/180.0));
    var l = o.left+ (twdistance * Math.cos(twangle * Math.PI/180.0));
    
    $('#twitter').css({
        top: t-3600,
        left: l+50
    });
    
    twangle += (twspeed * (twrate/1000)) % 360*i;
}

var lnangle = 90;     // starting position (degrees)
var lndistance = 150; // distance of b from a
var lnspeed = 600;    // revolution speed in degrees per second
var lnrate  = 10;    // refresh rate in ms

function fln(i) {
    
    var o = $('#center').offset();
    
    var t = o.top + (lndistance * Math.sin(lnangle * Math.PI/180.0));
    var l = o.left+ (lndistance * Math.cos(lnangle * Math.PI/180.0));
    
    $('#linkedin').css({
        top: t-3600,
        left: l+50
    });
    
    lnangle += (lnspeed * (lnrate/1000)) % 360*i;
}
/**
 * Scripts for Base5Child Theme
 * 
 * @package base5
 * @subpackage base5child
 */
//DISABLE HREF
var disableLink = function() { 
	$('.nofollow').click(function(e) {
		e.preventDefault();
	});
}
$(document).ready(disableLink);

// MOBILE NAV
var mobileNav = function() { 
    // Nav toggle
	$('#trigger-mobile-nav').click(function() {
		$('.main-navigation ul, #risk-progress').toggleClass('open');
		$('#trigger-mobile-nav').toggleClass('active');
		return false;
	})
	
}	
$(document).ready(mobileNav);

// VIDEO CONTROL (FADE/PLAY)
var videoControl = function() { 
	$('.watch-btn').click(function() {
		$("video").each(function(){
			$(this).get(0).play();
		});
		$('.video-txt').fadeOut("slow");
		return false;
	})
	
}	
//$(document).ready(videoControl);


//LOCAL SCROLL
var scrollIt = function() { 
$.localScroll({offset:{ top:-106}}, {easing:'elasout'});
}
$(document).ready(scrollIt);

// CONTACT FORM TOGGLE
var divToggle = function() { 
	$('#contact-trigger').click(function() {
		$('#contact-wrap').toggleClass('open');
		return false;
	});
	
	
	//$('.open-trigger').unbind('click').click(function() {
		//$('#purchase-wrap, #purchase').toggleClass('open');
		//$('#purchase-trigger').hide();
		//$('html,body').animate({scrollTop: $(window).scrollTop() + 300, easing:'elasout'})
		//return false;
	//});
	
	$('.open-trigger').toggle(function() {
        	//$('#site-index').animate({'max-height': '1200px'}, 200, function() { $('html, body').animate({scrollTop:$(document).height()}, 'slow'); } );
			$('#purchase-wrap').animate({'max-height': '1000px'}, 200, function() { $('html, body').animate({scrollTop: $("#footer").offset().top, easing:'elasout' }, 800); } );
			$('#purchase-trigger').hide();
			// $('.purchase-panel h2.entry-title').html("PURCHASE YOUR COMPLETE COLLECTION FOR $100 <br /><small>*Taxes & Shipping Included</small>");
    	}, function() {
        	//$('#purchase-wrap').animate({'height': '0px'}, 100 );
    	}); 
	
}	
$(document).ready(divToggle);

//STICKY NAV
function stickyNav() {
	//vph2 = $('#mast video').height() - 80;
	vph3 = $('#mast').height();
    if ($(window).scrollTop() > vph3) {
      $("#header, .content").addClass("chill");
    } else {
        $("#header, .content").removeClass("chill");
    }
}

$(window).scroll(function() {
	stickyNav();
});
$(document).ready(function(){
    stickyNav();
});

//RESIZE VIDEO CONTAINER
function resizeDiv() {
      //vpw = $(window).width() - 105;
      vph = $('#mast video').height() - 25; 
      $('#mast').css({'height': vph + 'px'});
	  
	  vph4 = $('#mast img#mast_inner-2 ').height() - 25; 
      $('#mast').css({'height': vph4 + 'px'});
  }
  
  $(window).load(function(){
      resizeDiv();
  });
   $(document).ready(function(){
      resizeDiv();
  });
  window.onresize = function(event) {
      resizeDiv();
  }
  
// PARALLAX 
var parallaxIt = function() { 
//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#risker-img-1').parallax("center", 567, -0.5, true);
}	
//$(document).ready(parallaxIt);
jQuery(document).ready(function($){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);
    if (agentID) { } else { 
	//$(document).ready(parallaxIt); 
	}
});
 
  

  
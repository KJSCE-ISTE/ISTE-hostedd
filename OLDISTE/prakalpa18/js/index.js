
$(document).ready(function() {
    // $('video').get(0).play(); 
  //  add smooth scrolling to all links in navbar and footer
  // $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
 $(".navbar a, a[href='#prakalpa'], a[href='#ABOUT'], a[href='#THEME'], a[href='#SCHEDULE']  a[href='#PRIZES'] a[href='#CONTACT'] a[href='#APPLY'] a[href='#carousal'] ").on('click', function(event) {

    if (this.hash !== "") {
      // prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        // add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End If
  });
});
$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});


$(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    });   
});






 // //Closing the collapse on navbar onclick
 //      $('.navbar-collapse a').click(function(){
 //      $(".navbar-collapse").collapse('hide');
 //      });
 //      $(document).ready(function(){
 //      // Add smooth scrolling to all links in navbar + footer link
 //      $(".navbar a, a[href='#prakalpa'], a[href='#ABOUT'], a[href='#THEMES'], a[href='#SCHEDULE']  a[href='#PRIZES'] a[href='#CONTACT'] a[href='#APPLY'] ").on('click', function(event) {
 //      // Make sure this.hash has a value before overriding default behavior
 //      if (this.hash !== "") {
 //      // Prevent default anchor click behavior
 //      event.preventDefault();
 //      // Store hash
 //      var hash = this.hash;
 //      // Using jQuery's animate() method to add smooth page scroll
 //      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
 //      $('html, body').animate({
 //      scrollTop: $(hash).offset().top
 //      }, 900, function(){
      
 //      // Add hash (#) to URL when done scrolling (default click behavior)
 //      window.location.hash = hash;
 //      });
 //      } // End if
 //      });
      
 //      window.onscroll = function() {scrollFunction()};
 //      function scrollFunction() {
 //      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 //      document.getElementById("myBtn").style.display = "block";
 //      } else {
 //      document.getElementById("myBtn").style.display = "none";
 //      }
 //      }
      
 //      // When the user clicks on the button, scroll to the top of the document
 //      $(window).scroll(function() {
 //      $(".slideanim").each(function(){
 //      var pos = $(this).offset().top;
 //      var winTop = $(window).scrollTop();
 //      if (pos < winTop + 600) {
 //      $(this).addClass("slide");
 //      }
 //      });
 //      });
 //      })
 //      
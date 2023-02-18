
var elementOld = null;
var openClass = "Accordion__tab--open";

function toggleAccordion(element) {
    content = element.querySelector(".Accordion__tab__content");

    if(elementOld != null){
        elementOld.classList.remove(openClass);
        contentOld = elementOld.querySelector(".Accordion__tab__content");
        contentOld.style.maxHeight = "0px";
    }

    if(elementOld !== element){
        element.classList.add(openClass);
        content.style.maxHeight = content.scrollHeight + "px";
        elementOld = element;
    }else{
        elementOld = null;
    }
}

// The data/time we want to countdown to
var countDownDate = new Date("April 13, 2021 10:30:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = ('0' + hours).slice(-2); 
document.getElementById("mins").innerHTML = ('0' + minutes).slice(-2);   
document.getElementById("secs").innerHTML = ('0' + seconds).slice(-2);     
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);


function show() {
  document.getElementById('id1').classList.remove("d-none");
}
var btn = $('#scroll-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
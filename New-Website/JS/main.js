//Init Scrollspy
$("body").scrollspy({
  target: "#main-nav",
});



//Smooth Scrolling
$("#main-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
// number count for stats, using jQuery animate

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 18000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
function navigate() {
  window.open("https://forms.gle/auH5R24vqhMfQCGNA", "_blank");
}

//List of sentences
    var _CONTENT = [ "ISTE KJSCE" ];
    
    // Current sentence being processed
    var _PART = 0;
    
    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;
    
    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;
    
    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");
    
    // Implements typing effect
    function Type() { 
      var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX++;
    
      // If full sentence has been displayed then start to delete the sentence after some time
      if(text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
          _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
      }
    }
    
    // Implements deleting effect
    function Delete() {
      var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX--;
    
      // If sentence has been deleted then start to display the next sentence
      if(text === '') {
        clearInterval(_INTERVAL_VAL);
    
        // If last sentence then display the first one, else move to the next
        if(_PART == (_CONTENT.length - 1))
          _PART = 0;
        else
          _PART++;
        _PART_INDEX = 0;
    
        // Start to display the next sentence after some time
        setTimeout(function() {
          _INTERVAL_VAL = setInterval(Type, 100);
        }, 300);
      }
    }
    
    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);
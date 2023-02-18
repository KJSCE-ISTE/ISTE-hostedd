//Gallery Section
$(document).ready(function () {
  $(".nav-item-2").click(function () {
    // reset active class
    $(".nav-item-2").removeClass("active-2");
    // add active class to selected
    $(this).addClass("active-2");
    // return needed to make function work
    return false;
  });

  $(function () {
    // create an empty variable
    var selectedClass = "";
    // call function when item is clicked
    $(".nav-item-2").click(function () {
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel");
      // fades out all portfolio items
      $(".portfolio li").fadeOut(300);
      // fades in selected category
      $(".portfolio li." + selectedClass)
        .delay(300)
        .fadeIn(300);
    });
  });
});
var projectInfo = document.querySelector(".project-info");
projectInfo.addEventListener("touchstart", function() {
this.classList.add("hover");
}, true);
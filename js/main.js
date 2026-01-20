$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {

  $("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
  });
  
  $(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
  });
  // Product Counting
  $("button.plus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    $(this)
      .parent()
      .find(".quantity")
      .val(newValue + 1);
  });

  $("button.minus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    if (newValue <= 1) {
    } else {
      $(this)
        .parent()
        .find(".quantity")
        .val(newValue - 1);
    }
  });
  var $mediaElements = $('.course');
$('.tabs-sec .tab-a').click(function (e) {
    e.preventDefault();
    var filterVal = $(this).data('filter');
    $(".tabs-sec .tab-a").not(this).removeClass("active");
    $(this).toggleClass("active");
    $mediaElements.removeClass("active").filter('.' + filterVal).addClass("active");
    // if (filterVal === 'one') {
    //   $mediaElements.show();
    // } else {
        
    // }
});

});
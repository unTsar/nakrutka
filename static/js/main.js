function scrTo(id){
	$.scrollTo(id, 1000);
};      
$(document).ready(function () {
    svg4everybody({});
    $("#icon1").click(function() {
    	$(".iconT").removeClass('active')
    	$(this).addClass('active')
    	$(".descR").removeClass("active animated fadeIn")
    	$("#desc1").addClass("active animated fadeIn")
    })
    $("#icon2").click(function() {
    	$(".iconT").removeClass('active')
    	$(this).addClass('active')
    	$(".descR").removeClass("active animated fadeIn")
    	$("#desc2").addClass("active animated fadeIn")
    })
    $("#icon3").click(function() {
    	$(".iconT").removeClass('active')
    	$(this).addClass('active')
    	$(".descR").removeClass("active animated fadeIn")
    	$("#desc3").addClass("active animated fadeIn")
    })
    $("#icon4").click(function() {
    	$(".iconT").removeClass('active')
    	$(this).addClass('active')
    	$(".descR").removeClass("active animated fadeIn")
    	$("#desc4").addClass("active animated fadeIn")
    })

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:3,
  	loop: true,
  	dots: false,
  	autoplay: true,
  	responsive : {
  		0 : {
  			items: 1
  		},
  		800 : {
  			items: 3
  		}
  	}
  });

  // BPopup
  $("#submit").click(function() {
    $('.popup').bPopup();
  })
});
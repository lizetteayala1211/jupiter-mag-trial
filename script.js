
// $(document).ready(function(){
//     $(window).scroll(function () {   

//         console.log('they called it!');
       
//      if($(window).scrollTop() > 200) {
//         $('#float').css('position','fixed');
//         $('#float').css('top','0'); 
//      }
    
//      else if ($(window).scrollTop() <= 200) {
//         $('#float').css('position','');
//         $('#float').css('top','');
//      }  
//         if ($('#float').offset().top + $("#float").height() > $("#foot").offset().top) {
//             $('#float').css('top',-($("#float").offset().top + $("#float").height() - $("#foot").offset().top));
//         }
//     });
//     });



/*
* Fix sidebar at some point and remove
* fixed position at content bottom
*/
$(window).scroll(function () {
	var headerHeight = $('.site-header').innerHeight();
	var contentHeight = $('.site-main').innerHeight();
	var sidebarHeight = $('.side-navigation').height();
  var sidebarBottomPos = contentHeight - sidebarHeight; 
  var trigger = $(window).scrollTop() - headerHeight;

      	if ($(window).scrollTop() >= headerHeight) {
          	$('.side-navigation').addClass('fixed');
      	} else {
          	$('.side-navigation').removeClass('fixed');
      	}

      	if (trigger >= sidebarBottomPos) {
          	$('.side-navigation').addClass('bottom');
      	} else {
          	$('.side-navigation').removeClass('bottom');
      	}
});
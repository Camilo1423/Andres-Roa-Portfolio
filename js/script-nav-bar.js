'use strict'

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})


$(".rotate").textrotator({
    animation: "dissolve",
    separator: "|",
    speed: 2000 
  });


  /* scroll up */

  $(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});
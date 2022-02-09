'use strict'

window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})

/* preload */

setTimeout(function(){
	$('.loader').fadeToggle();
  },2000);


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

/* Dark/light mood */

  const DarkMood = document.querySelector(".mood-light-or-night");

  DarkMood.addEventListener("click", () => {
	  document.body.classList.toggle("dark-theme");
	  DarkMood.classList.toggle("sun");

	  localStorage.setItem("saved-theme", getCurrentTheme());
	  localStorage.setItem("saved-icon", getCurrentIcon());
  });

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => DarkMood.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");

  if(savedTheme) {
	  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  };

  /* menu toggle */

  const menuBtn = document.querySelector(".btn-responsive");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".menu-bar");
  const navItems = document.querySelectorAll(".nav-initial a");

  menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
  
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
    })
  })
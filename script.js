$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY>20) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	});

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
});


function myFunction() {
  var dots = document.getElementById("medical_dots");
  var moreText = document.getElementById("medical_more");
  var btnText = document.getElementById("medical_Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function clothFunction() {
  var dots = document.getElementById("cloth_dots");
  var moreText = document.getElementById("cloth_more");
  var btnText = document.getElementById("cloth_Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
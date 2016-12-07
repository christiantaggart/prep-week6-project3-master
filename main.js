/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').on("click", function(){
  $("ul li:nth-child(3)").css({"color": "#8A2BE2"});
})

// Question #2
$('ul li:nth-child(4)').click(function() {
    $(this).append('<li>NEW CODES</li>');
  });


// Question #3
$("#removeLi").on("click", function(){
  $('ul li:nth-child(2)').remove();
})


// Question #4
$('ul li:nth-child(5)').on("click", function(){
  $(this).css({"font-size": "40px"})
  $('ul li:nth-child(4)').remove();
  $('ul li:nth-child(3)').remove();
  $('ul li:nth-child(2)').remove();
  $('ul li:nth-child(1)').remove();
})

// Question #5
$('.cute').click(function(){
  $(".clones").append('<img class="cute" src="images/puppy.jpg" alt="puppy">')
})


  // Question #6
$('body').dblclick(function(){
  $('#makeSquare').css({'border-radius':"0px", "width":"120px"});
})


// Question #7
$('.black').on("click",function(){
$('body').css({"background": "black"});

})

$('.wood swatch').on("click",function(){
$('body').css({"background": "wood"});

})


  // Question #8




});

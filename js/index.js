$(document).ready(function () {
  
  $('.secondmenu >li >a').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').stop().slideToggle();
    $(this).parent().siblings().find('>a').removeClass('active');
    });

$('.secondmenu a,.html-inner a ,.topmenu_list a').click(function (e) { 
    e.preventDefault();
    });

$('.navbar p, .navbar li').click(function (e) { 
    $(this).stop().toggleClass('animate__animated animate__headShake');
    });
$('.topmenu_list img').hover(function () {
        // over
        $(this).toggleClass('animate__animated animate__bounce');
    });
$('.mainmenu >h1 a, .footer>h2 a').click(function (e) { 
    e.preventDefault();
    $(this).stop().toggleClass('animate__animated animate__flip');
});

  $('.sub_btn').click(function (e) { 
    e.preventDefault();
    $('.form_inf').css({
      'background': 'rgba(0,0,0,0.8)',
      'font-size':'26px',
    });
  });
  $('.fixed a').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
       
  $(".fixed a[href$='.jpg']").addClass('fa fa-file-photo-o');
  
  });
//Lightbox效果
lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true,
    'maxWidth':500,
    'maxHeight':500,
    'fadeDuration':700,
    'showImageNumberLabel':false,
    'positionFromTop':200,
  })
//swiper效果
  var mySwiper = new Swiper('.swiper-container', {

    loop: true,
    speed:1500,
    autoplay:{
      delay:1000,
    },
    effect:'coverflow',
    grabCursor:true,
    centeredSlides:true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },






});
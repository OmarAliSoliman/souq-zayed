$(document).ready(function () {

  $('.header-slider').slick();

  $('.new-ads-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: false,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });

  $('.department-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: false,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });



  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  // AOS.init();


  if ($('.departments').length) {
    let plusBtn = document.querySelectorAll('.departments .card .plus');
    let departmentCard = document.querySelectorAll('.departments .card');
    let departmentCardBody = document.querySelectorAll('.departments .card .card-body');
    let openDepartmentCard = false;

    plusBtn.forEach((plus, index) => {
      plus.addEventListener('click', () => {
        if($(plus).hasClass('hide')){
          departmentCard[index].classList.add('card-active');
          departmentCard[index].style.height = "auto";
          departmentCardBody[index].style.overflow = "visible";
          plus.innerHTML = `<i class='fas fa-minus'></i>`
          plus.classList.toggle('hide');
        }else{
          departmentCard[index].classList.remove('card-active');
          departmentCard[index].style.height = "195px";
          departmentCardBody[index].style.overflow = "hidden";
          plus.innerHTML = `<i class='fas fa-plus'></i>`
          plus.classList.toggle('hide');
        }
      })
    })

  }

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
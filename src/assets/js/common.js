$(".btn__show_menu").click(function () {
  if ($(".btn__show_menu").hasClass("show__menu")) {
    $(".btn__show_menu").removeClass("show__menu");
  } else {
    $(".btn__show_menu").addClass("show__menu");
  }

  if ($("#headMenuBox").hasClass("show_menu_sp")) {
    $("#headMenuBox").removeClass("show_menu_sp");
    $("#headMenuBox").addClass("hide_menu_sp");
  } else {
    $("#headMenuBox").addClass("show_menu_sp");
    $("#headMenuBox").removeClass("hide_menu_sp");
  }

  if ($(".txt_logo").hasClass("active")) {
    $(".txt_logo").removeClass("active");
  } else {
    $(".txt_logo").addClass("active");
  }
  $(".header .header_menu").toggleClass("show-menu-sp");
  $(".header .header_menu .menu-content").toggleClass("slide-menu-sp");
});
$('.restaurant-desc__button').click(function(e){
  $(this).removeClass('sp_flex')
  $(this).closest('.restaurant-desc').find('.restaurant-desc__col.hide-box-sp').removeClass('hide-box-sp');
})
$(window).click(function (e) {
  if (e.target.className === "menu-overlay") {
    $(".header .btn__show_menu").trigger("click");
  }
});
function allcontaintsContentAutoFix() {
  let i = window.innerWidth;
  if(i < 769) {
    $('.equipment_content .block__img_wrap').addClass("block__img_swiper");
    $('.equipment_content .block__img_child').addClass("swiper-wrapper");
    $('.equipment_content .block__img_child .block__img_item').addClass('swiper-slide')
    $('.allcontaints__content .allcontaints__wrap').addClass('swiper-wrapper')
    $('.point__block01').addClass('point__block_slide')
    $('.point__block_slide_wrap').addClass('swiper-wrapper')
    $('.point__block_item').addClass('swiper-slide')
    var swiper = new Swiper(".block__img_swiper", {
      pagination: {
        el: ".view-more__pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".allcontaints__wrap_slide", {
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      }
    });

    var swiper = new Swiper(".point__block_slide", {
      slidesPerView: "auto",
      loop: true,
    });
  }
  else {
    $('.equipment_content .block__img_wrap').removeClass("block__img_swiper");
    $('.equipment_content .block__img_child').removeClass("swiper-wrapper");
    $('.equipment_content .block__img_child .block__img_item').removeClass('swiper-slide')

    $('.point__block01').removeClass('point__block_slide')
    $('.point__block_slide_wrap').removeClass('swiper-wrapper')
    $('.point__block_item').removeClass('swiper-slide')
  }
};

$(".sp_row_select_item").click(function () {
  var id = $(this).attr("id");
  $(".sp_row_select_item.active").removeClass("active");
  $(".plan_button_row.active").removeClass("active");
  $(`#${id}.sp_row_select_item`).addClass("active");
  $(`.${id}.plan_button_row`).addClass("active");
});

function beforeText(text) {
  let tag = text.split('\n')
  return tag.join('<br>'); 
}

$("#btn_view_more").click(function () {
  $(".slide_stay_plan.sp .slide_plan_item.hide").toggle();
});

function fix_menu() {
  var lastScroll = 0;
  var header = $("#header");
  var textLogo = $(".txt_logo");
  var svgLogo = $(".svg_logo");
  var textMenu = $(".order__link .nav_item");
  let widthPage = $(window).width();
  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      if (currentScroll > 120 && widthPage > 768) {
        if ($("#header.header__fixed")[0]) {
          header.addClass("header__unfixed");
          header.removeClass("header__fixed");
        }
      }
    } else {
      lastScroll = currentScroll;
      if (currentScroll > 120 && widthPage > 768) {
        header.removeClass("header__unfixed");
        header.addClass("header__fixed");
      }
    }
    if (currentScroll > 0) {
      header.css("background-color", "RGBA(255 255 255 / 90%)");
      textLogo.css("color", "#000");
      textMenu.css("color", "#000");
      // svgLogo.css("filter", "invert(0%) sepia(100%) saturate(11%) hue-rotate(200deg) brightness(99%) contrast(104%)");
    } else {
      header.css("background-color", "transparent");
      textLogo.css("color", "#fff");
      textMenu.css("color", "#fff");
      // svgLogo.css("filter", "brightness(0) invert(1)");
    }
  };
}
fix_menu();
let timeOutSlide;
function imageSlideShow(count) {
  const slides = document.querySelectorAll(".four_seasons__image-slide");
  const current = document.querySelector(".image-active");
  const textSlides = document.querySelectorAll(".four_seasons__link-slide");
  const currenttextSlide = document.querySelector(
    ".four_seasons__link-slide.active"
  );
  $(".four_seasons_run").addClass("four_seasons_progress_animation");
  if (count == 0) {
    count++;
  } else {
    current.classList.remove("image-active");
    currenttextSlide.classList.remove("active");
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add("image-active");
      currenttextSlide.nextElementSibling.classList.add("active");
    } else {
      slides[0].classList.add("image-active");
      textSlides[0].classList.add("active");
    }
  }
  timeOutSlide = setTimeout("imageSlideShow()", 4000);
}
$(window).on("resize", function () {
  let widthPage = $(window).width();
  fix_menu();
  allcontaintsContentAutoFix()
  if (widthPage < 769) {
    $("#header").removeClass("header__fixed");
    $(".home__banner_pc").remove();
  } else {
    $(".allcontaints__pagination").removeClass("swiper-pagination-progressbar");
  }
});

$(document).ready(function () {
  let count = 0;
  let countSlide = 0;
  let widthPage = $(window).width();
  if($('#four_seasons').length == 1) {
    imageSlideShow(count);
  }
  $('.four_seasons__link-slide').click(function (e) {
    let titleSlide = e.target 
    count = 0;
    const textSlides = document.querySelectorAll(".four_seasons__link-slide");
    const slides = document.querySelectorAll(".four_seasons__image-slide");
    let tempId;
    clearTimeout(timeOutSlide)
    $('.four_seasons__link-slide').removeClass('active')
    $(titleSlide).addClass('active')
    textSlides.forEach((element,index) => {
      if(element === titleSlide){
        tempId = index
      }
    });
    $('.four_seasons__image-slide').removeClass('image-active')
    slides.forEach((element,index) => {
      if(index === tempId){
        $(element).addClass('image-active')
      }
    });
    imageSlideShow(count)
  })
  allcontaintsContentAutoFix()
  if (widthPage < 769) {
    $(".home__banner_pc").remove();
  }
  var swiper = new Swiper(".facilities-box__slide", {
    pagination: {
      el: ".facilities-box__swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper(".slide__top_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".slide__top_pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
    },
  });
  var swiper = new Swiper(".slide__product_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".slide_product_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 13,
      },
    },
  });
  var swiper = new Swiper(".news_slide_swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 27,
      }
    },
  });
  var swiper = new Swiper(".slide__plan_swiper", {
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: "auto"
      },
      769: {
        slidesPerView: 1.6,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next-plan",
          prevEl: ".swiper-button-prev-plan",
        },
      },
    },
  });
  var swiper = new Swiper(".rooms__content_slide", {
    slidesPerView: 1.5,
    spaceBetween: 20,
  });
  var swiper = new Swiper(".cooking_swiper", {
    slidesPerView: 3,
    spaceBetween: 58,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.15,
        spaceBetween: 10,
      },
      375: {
        slidesPerView: 1.15,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.15,
        spaceBetween: 10,
      }
    }
  });
  var swiper = new Swiper(".slide__rooms_swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      991: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 12,
        slidesPerView: 2.15,
      },
      375: {
        spaceBetween: 12,
        slidesPerView: 2.15,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 2.15,
      }
    }
  });
  var swiper = new Swiper(".facilities__content_slide", {
    slidesPerView: 1.2,
    spaceBetween: 10,
  });
  var swiper = new Swiper(".location__swiper_swap", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
  var swiper = new Swiper(".tour__swiper_swap", {
    slidesPerView: "auto",
    spaceBetween: 25,
  });

  // document.getElementById('input_date').valueAsDate = new Date()
});
$('.amenity_more').click(function(){
  $('.amenity_box.amenity_hide_sp').removeClass('amenity_hide_sp')
  $('.amenity_more').addClass('amenity_hide_sp')
})
 
//AOS
AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
  duration: 450,
  offset: 100,
  mirror: true,
  delay: 300,
  easing: 'ease-in-sine',
  anchorPlacement: 'top-bottom',
});

// SLIDE BANNER -->
(function() {
  function init(item) {

    let progessAnimation = document.querySelector('.pc .progess-bar__inner')
    var nameSlide = document.querySelectorAll('.pc .name-slide__item')

    var items = item.querySelectorAll('.mv-slide__item'),
      current = 0,
      autoUpdate = true,
      timeTrans = 5000;

    //create nav
    var nav = document.createElement('nav');
    nav.className = 'nav-arrows';

    //create counter
    var counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerHTML = "<span>01</span>";

    if (items.length > 1) {
      nav.appendChild(counter);
      item.appendChild(nav);
    }

    items[current].className = "current";
    if (items.length > 1) items[items.length - 1].className = "prev_slide";

    function resizeFunc() {
      let screen = document.getElementById('top__page')
      if(screen.offsetWidth > 768) {
        progessAnimation = document.querySelector('.pc .progess-bar__inner')
        nameSlide = document.querySelectorAll('.pc .name-slide__item')
      }
      else {
        progessAnimation = document.querySelector('.sp .progess-bar__inner')
        nameSlide = document.querySelectorAll('.sp .name-slide__item')
      }
    }
    resizeFunc();
    window.onresize = resizeFunc;

    var endRunProgess
    function moveProgess() {
      clearTimeout(endRunProgess)
      progessAnimation.classList.remove("progess-bar__animation")
      setTimeout(function() {
        progessAnimation.classList.add("progess-bar__animation")
      }, 1)
      endRunProgess = setTimeout(function() {
        progessAnimation.classList.remove("progess-bar__animation")
      }, timeTrans - 50)
    }
    moveProgess()

    var navigate = function(dir) {
      moveProgess()
      items[current].className = "";
      nameSlide[current].className = "name-slide__item"

      if (dir === 'right') {
        current = current < items.length - 1 ? current + 1 : 0;
      } else {
        current = current > 0 ? current - 1 : items.length - 1;
      }

      var nextCurrent = current < items.length - 1 ? current + 1 : 0,
        prevCurrent = current > 0 ? current - 1 : items.length - 1;

      items[current].className = "current";
      items[prevCurrent].className = "prev_slide";
      items[nextCurrent].className = "";
      nameSlide[current].className = "name-slide__item active"

      //update counter
      counter.firstChild.textContent = "0" + parseInt(current + 1);
    }

    let autoNextSlide = setInterval(function() {
      if (autoUpdate) navigate('right');
    }, timeTrans);

  }
  [].slice.call(document.querySelectorAll('.mv-slide')).forEach(function(item) {
    init(item);
  });
})();
// SLIDE BANNER --/>

var swiper = new Swiper(".allcontaints__wrap_slide", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      slidesPerView: '',
      spaceBetween: 0,
    },
  },
});
let hotelCode = $('#search_box').attr('data-hotel')
if(hotelCode !== ''){
  let numberOfRoom = 0
  let numberOfPeople = 0 
  $('#numOfRoom').change(function() {
    numberOfRoom = $('#numOfRoom').val()
    numberOfPeople = $('#numOfPeople').val()
    console.log(numberOfPeople);
    let output = []
    for (let index = 1; index <= 10; index++) {
      output.push('<option value="'+ index +'">'+ index*numberOfRoom +'名</option>');
    }
    $('#numOfPeople').html(output.join(''));
    $('#numOfPeople option[value="'+numberOfPeople+'"]').attr("selected", "selected");
  })
}
getFullMonth = function(date) {
  const month = date.getMonth()+1
  return month < 10 ? '0'+month : month
}
$('#search-btn-handle').click(function() {
  var startDates = new Date($('#datepicker').data('daterangepicker').startDate);
  var endDates = new Date($('#datepicker').data('daterangepicker').endDate);
  var sumDate = endDates.getTime() - startDates.getTime()  
  let TotalDays = Math.ceil(sumDate / (1000 * 3600 * 24));
  console.log(TotalDays)
  let dayStart = startDates.getDate();
  let monthStart = startDates.getMonth() + 1;
  let yearStar = startDates.getFullYear();
  let dayEnd = endDates.getDate();
  let monthEnd = endDates.getMonth() + 1;
  let yearEnd = endDates.getFullYear();
  let numberOfRoom = $('#numOfRoom').val()
  let numberOfPeople = $('#numOfPeople').val()
  let typeSearch = $('#search_box').attr('type-search')
  let hotelCode = $('#search_box').attr('data-hotel')
  if(typeSearch == 3 ) {
    let roomArr = []
    for(let i = 0 ; i < parseInt(numberOfRoom); i ++ ) {
      roomArr.push({'adults':parseInt(numberOfPeople)})
    }
    let tempArr = JSON.stringify(roomArr)
    window.open(`https://booking.tripla-ryokan.com/#/booking/result?code=a6262b57ad9f26daf528d7eefd85303a&checkin=${yearStar}/${monthStart}/${dayStart}&checkout=${yearEnd}/${monthEnd}/${dayEnd}&rooms=${tempArr}`);
  } else if (typeSearch == 2) {
      window.open(`https://all.accor.com/lien_externe.svlt?goto=rech_resa&destination=tokyo&dayIn=${dayStart}&monthIn=${monthStart}&yearIn=${yearStar}&nightNb=${TotalDays}&roomNumber=${numberOfRoom}&adultNumber=${numberOfPeople}&code_langue=ja`);
  } else if (typeSearch == 1) {
    window.open(`https://d-reserve.jp/GSEA001F01300/GSEA001A01?hotelCode=${hotelCode}&lodgingDateFrom=${yearStar+''+getFullMonth(startDates)+''+dayStart}&lodgingDateTo=${yearEnd+''+getFullMonth(endDates)+''+dayEnd}&sumrm=${numberOfRoom}&lt001=0&lnum001=${numberOfPeople}`);
  } else {}
});
//date-picker
var d = new Date(),
    output = [
        d.getFullYear(),
        ('' + (d.getMonth() + 1)).substr(-2), 
        ('' + d.getDate()).substr(-2)
    ].join('/');
$('#input_date').val(output);

// const picker = datepicker('#input_date', {
//   customDays: ['日', '月 ', '火 ', '水 ', '木 ', '金 ', '土 '],
//   customMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
//   formatter: (input, date, instance) => {
//     const value = date.toLocaleDateString('zh-Hans-CN')
//     input.value = value 
//   }
// })
// picker.calendarContainer.style.setProperty('font-size', '1.5rem')


$(function() {
  $('input[name="dates"]').daterangepicker({
    format: 'YYYY/MM/DD',
    opens: 'center',
    autoApply : true,
    minDate: moment() ,
    locale: {
      format: 'YYYY-MM-DD',
      "daysOfWeek": ['日', '月 ', '火 ', '水 ', '木 ', '金 ', '土 '],
      "monthNames": ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
    },
  }, 
  );
});
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

// <---- PLAN CONTENT ---->
const dataPlan = [
  {
    image: "../assets/img/top/img_food.png",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "人気",
    breakfast: "素泊まり"
  },
  {
    image: "../assets/img/top/img_food.png",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/img_food.png",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/img_food.png",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/img_food.png",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
];
let tempDataPlan = [];
// active recommended btn 
$("#recommended .plan_button_item").click(function (e) {
  var id = $(this).attr("id");
  var idxRCM = $(e.target).text();
  var idxBRF = $('#breakfast .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
  $("#recommended  .plan_button_item").removeClass("active");
  $(`#recommended  #${id}`).addClass("active");
});
// active breakfast btn 
$("#breakfast .plan_button_item").click(function (e) {
  var id = $(this).attr("id");
  var idxBRF = $(e.target).text();
  var idxRCM = $('#recommended .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
  $("#breakfast  .plan_button_item").removeClass("active");
  $(`#breakfast  #${id}`).addClass("active");
});
// sort data by active recommended variable , breakfast variable
function forEachPlanItem(idxRCM,idxBRF) {
  tempDataPlan = [];
  dataPlan.forEach(element => {
    if(element.recommended == idxRCM && element.breakfast == idxBRF) {
      tempDataPlan.push(element)
    }
  });
  showDataPlan(tempDataPlan)
}

// show data
function showDataPlan (data) {
  var dataHtml = '<div class="swiper-wrapper slide__plan_wrap flex">';
  $.each(data, function (index, item) {
      dataHtml += '<div class="slide_plan_box swiper-slide relative"><div class="img_wrap"><img src="' + item.image +'" alt="" /></div><div class="slide_txt_wrap flex col"><div class="slide_txt_title">' + item.heading + '<table class="table_txt flex"><tr class="flex"><td class="table_txt_left">期間：</td><td class="table_txt_right">' + item.period_from + '〜' + item.period_to + '</td></tr><tr class="flex"><td class="table_txt_left">料金：</td><td class="table_txt_right">' + item.amount + '</td></tr><tr><td class="table_txt_left">お料理：</td><td class="table_txt_right">' + item.recommended + '、' + item.breakfast + '</td></tr></table></div><a class="btn_detail_plan sp_flex" href="#">詳細をみる</a></div></div>'
  });
  dataHtml += '</div>';
  $(".slide__plan_swiper").html(dataHtml);
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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });
}
// first show data 
$(document).ready(function () {
  var idxRCM = $('#recommended .plan_button_item.active').text()
  var idxBRF = $('#breakfast .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
})

// <---- PLAN CONTENT ----/>



$("#btn_view_more").click(function () {
  $(".slide_stay_plan.sp .slide_plan_item.hide").toggle();
});

function fix_menu() {
  var lastScroll = 0;
  var header = $("#header");
  var textLogo = $(".txt_logo");
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
    } else {
      header.css("background-color", "transparent");
      textLogo.css("color", "#fff");
      textMenu.css("color", "#fff");
    }
  };
}
fix_menu();

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

  setTimeout("imageSlideShow()", 4000);
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
  imageSlideShow(count);
  allcontaintsContentAutoFix()
  if (widthPage < 769) {
    $(".home__banner_pc").remove();
  }
  var swiper = new Swiper(".facilities-box__slide", {
    pagination: {
      el: ".facilities-box__swiper-pagination",
    },
  });
});
$('.amenity_more').click(function(){
  console.log('tesst');
  $('.amenity_box.amenity_hide_sp').removeClass('amenity_hide_sp')
  $('.amenity_more').addClass('amenity_hide_sp')
})

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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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


$(function () {
  let container = $('#pagination');
  let dataTemp = {
    title: "ブライダルフェアのご案内1月8(土)、9(日)、10(月)",
    imgsrc: "/assets/img/news/event-img-1.jpg",
    date: "2022.01.03"
  }
  
  let dataSource = [];
  for(let i = 0 ; i < 100 ; i++) {
    dataSource.push(dataTemp)
  }
  console.log(dataSource)
  container.pagination({
      dataSource: dataSource,
      pageSize: 12,
      nextText: "次へ >",
      prevText: "< 前へ",
      autoHidePrevious: true,
      autoHideNext: true,
      callback: function (data, pagination) {
          var dataHtml = '<div class="infomation_events">';
          $.each(data, function (index, item) {
              dataHtml += '<div class="infomation_event"><div class="infomation_event_img"><img src=' + item.imgsrc + ' alt="" /></div><div class="infomation_event_date">' + item.date + '</div><div class="infomation_event_des">' + item.title + '</div></div>'
          });
          dataHtml += '</div>';
          $("#data-news").html(dataHtml);
      }
  })
})

//AOS
AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
  duration: 550,
  offset: 100,
  mirror: true,
  easing: 'ease-in-sine',
  anchorPlacement: 'center-bottom',
});

(function() {
  function init(item) {
    var items = item.querySelectorAll('.mv-slide__item'),
      current = 0,
      autoUpdate = true,
      timeTrans = 5000;
    var nameSlideActive = document.querySelectorAll('.name-slide__item.active')
    var nameSlide = document.querySelectorAll('.name-slide__item')
    //create nav
    var nav = document.createElement('nav');
    nav.className = 'nav-arrows';

    //create progess bar
    var progess = document.createElement('div');
    progess.className = 'progess-bar';
    progess.innerHTML = "<div id='progess-bar__inner'></div>";

    //create counter
    var counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerHTML = "<span>01</span>";

    if (items.length > 1) {
      nav.appendChild(counter);
      item.appendChild(progess);
      item.appendChild(nav);
    }

    items[current].className = "current";
    if (items.length > 1) items[items.length - 1].className = "prev_slide";

    var endRunProgess

    function moveProgess() {
      let progessAnimation = document.getElementById('progess-bar__inner')
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

    document.addEventListener('keydown', function(ev) {
      var keyCode = ev.keyCode || ev.which;
      switch (keyCode) {
        case 37:
          navigate('left');
          break;
        case 39:
          navigate('right');
          break;
      }
    });

    item.addEventListener('touchstart', handleTouchStart, false);
    item.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    };

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
          navigate('right');
        } else {
          navigate('left');
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    };
  }
  [].slice.call(document.querySelectorAll('.mv-slide')).forEach(function(item) {
    init(item);
  });

})();
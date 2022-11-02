
document.addEventListener('DOMContentLoaded', function () {
  testWebP(document.body)
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


$(document).ready(function () {
  let width = window.screen.width ;
  let height = window.screen.height ;
  if (width > 1024) {
      if (typeof document.getElementById("sticker").sticky === "undefined"){

      } else {
          document.getElementById("sticker").sticky({
              topSpacing: 0,
              center: true,
              zIndex: 990,
              getWidthFrom: "body"
          });
          document.getElementById("sticker").on('sticky-start', function () {
              this.style.padding = "30px 0"
          });
          document.getElementById("sticker").on('sticky-end', function () {
              this.style.padding = '50px 0'
          });
      }


      const catalog = new Swiper('.catalog-slides', {
          freeMode: true,
          slidesPerView: 5,
          // pagination: {
          //     el: '.swiper-pagination',
          // },
          scrollbar: {
              el: '.swiper-scrollbar',
              dragSize: 215,
              draggable: true,
          },
      });

  }

  let swiper = new Swiper('.slides', {
      loop: false,
      speed: 1200,
      parallax: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          320: {
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
              },
              speed: 700
          },
          990: {
              speed: 1200
          }
      }
  })

  if (width < 1024) {
      document.addEventListener('scroll', function(){
          if (window.scrollY < 100){
              document.getElementsByClassName('mobile')[0].classList.remove('background')
          } else {
              document.getElementsByClassName('mobile')[0].classList.add('background')
          }
      })

      /*Слайдер для страницы продукта*/


      let product_nav = new Swiper('#product_images-nav', {
          spaceBetween: 7,
          slidesPerView: "auto",
          freeMode: true,
          watchSlidesProgress: true,

      })
      let product = new Swiper('#product_images', {
          slidesPerView: 1,
          pagination: {
              el: ".product_image-pagination",
              clickable: true,
          },
          thumbs: {
              swiper: product_nav,
          },
      })
      console.log(product_nav.controller.control = product_nav)
      // product.controller.control = product_nav

      document.querySelectorAll('.dotts').forEach((e) => {
          e.textContent = "_____________"
      })

      document.querySelector(".filters") !== null ? document.querySelector(".mobile_filter-wrapper").append(document.querySelector(".filters")) : ""


      let filter_btns = document.querySelectorAll('.filter_show');
      filter_btns.forEach((e) => {
          e.addEventListener('click', () => {
              document.querySelector('.mobile_filter-wrapper').classList.toggle('active')
              document.querySelector('body').classList.toggle('no-scroll')
          })
      })

      let images = document.querySelectorAll('.actual .item_img');
      images.forEach(function (item){
          let img = item.querySelector('img');
          item.style.backgroundImage = "url("+img.getAttribute('src')+")"
          img.remove()
      })



      // $(".actual .item_img").each(function (index, e){
      //     let img = $(e).find('img')
      //     $(e).css('background-image', "url("+img.attr('src')+")")
      //     img.remove()
      // })
      // $(".footer-two-container a.wrap").contents().unwrap().wrap('<div class="chlen">')

      let s = document.createElement("div");
      s.classList.add('w-50', "d")
      document.querySelector(".footer-two-container").prepend(s)
      let links = document.querySelectorAll('a.wrap');
      links.forEach(function(item) {
          document.querySelector(".footer-two-container .d").append(item)
      })
      const howWork = new Swiper('.how_work-padding', {
          autoplay: true,
      });

      let productImgs = document.querySelector(".product_images")
      let productImgsChilds = productImgs !== null ? productImgs.childNodes : null
      if (productImgsChilds !== null){
          productImgsChilds.forEach((e, i) => {
              if ( e.nodeType === Node.ELEMENT_NODE) {
                  e.classList.add('swiper-slide')
                  let cloneNode = e.cloneNode(true)
                  let cloneTwo = cloneNode.cloneNode(true)
                  document.querySelector('#product_images > .swiper-wrapper').append(cloneNode)
                  document.querySelector(' #product_images-nav > .swiper-wrapper').append(cloneTwo)
                  e.remove()
              }
          })
      }
  } else {
      typeof document.getElementsByClassName('swiper-scrollbar')[0] !== "undefined" ? document.getElementsByClassName('swiper-scrollbar')[0].classList.remove('d-none') : ""
      typeof document.getElementsByClassName('swiper-pagination')[0] !== "undefined" ? document.getElementsByClassName('swiper-pagination')[0].classList.add('disabled') : ""
  }
  let password = document.getElementById('password')
  document.querySelector('.eventShowPass') !== null ?  document.querySelector('.eventShowPass').addEventListener('click', function (e){
      let type = password.getAttribute('type');
      type === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
  }) : ""

  let filter_brands = new Swiper('.filters_brands', {
      freeMode: true,
      slidesPerView: "auto",
      direction: "vertical",
      scrollbar: {
          el: '.filters_scrollbar',
          dragSize: 96,
          draggable: true,
      },
  })
  const trends = new Swiper('.trends', {
      freeMode: true,
      slidesPerView: 5,
      spaceBetween: 20,
      scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 147,
          draggable: true,
      },
      breakpoints: {
          320: {
              slidesPerView: 2.2,
              spaceBetween: 5,
          },
          540: {
              slidesPerView: 5,
              spaceBetween: 5,
          },
          990: {
              slidesPerView: 5.3,
              spaceBetween: 20,
          }
      }
  });

  let menu = document.getElementsByClassName('menu')[0]
  let menuShow = document.getElementsByClassName('header-wrapper')[0]
  let bg = false
  menu.addEventListener('click', function (){
      if (bg){
          document.getElementsByClassName('mobile')[0].style.backgroundColor = ""
      } else {
          document.getElementsByClassName('mobile')[0].style.backgroundColor = "transparent"
      }
      menuShow.classList.toggle('active')
      bg = !bg
  })

  function initDropdowns(el){
      let a = document.getElementsByClassName(el);
      for(let i = 0; i < a.length; i++){
          a[i].addEventListener("click", function(){
              let id = this.getAttribute("data-drop");
              this.classList.toggle('active')
              document.getElementById(id).classList.toggle('active')
          });
      }
  }
  initDropdowns("filters_title")
  initDropdowns("collapse-header")

  /*Страница каталога с фильтром*/
  let ranger = $(".js-range-slider").ionRangeSlider({
      postfix: "₽",
      hide_from_to: true,
      onStart: function (data) {
          // fired then range slider is ready
          document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
          document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
      },
      onChange: function (data) {
          document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
          document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
      },
      onFinish: function (data) {
          document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
          document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
      },
      onUpdate: function (data) {
          document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
          document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
      }
  });
})

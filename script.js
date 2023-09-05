document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
     const carousel = new Swiper("#definetly-query-me", {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 1.8,
   loop: true,
       
     coverflowEffect: {
       rotate: 0,
       stretch: 20,
       depth: -50,
       modifier: 2,
       slideShadows: true
     },
     keyboard: {
       enabled: true
     },
     mousewheel: {
       thresholdDelta: 0
     },
     spaceBetween: 40,
     loop: true,
     breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        380: {
          slidesPerView: 1.8,
          spaceBetween: 40,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 2,
            slideShadows: true
          },
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1324: {
          slidesPerView: 2.6,
          spaceBetween: 150,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: -50,
            modifier: 2,
            slideShadows: true
          },
        },
      },
   });
   
   console.log(document.querySelector("#definetly-query-me"))
   }, 1000) // Try to lower this number, until it stops working 🙃
 })


 document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
     const carousel = new Swiper("#definetly-query-me-03", {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 1.5,
     spaceBetween:40,
     loop: true,
       
     coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 0,
       modifier: 0,
       slideShadows: true
     },
     keyboard: {
       enabled: true
     },
     mousewheel: {
       thresholdDelta: 0
     },
     spaceBetween: 0,
     loop: true,
     breakpoints: {
      // '@0.6': {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      //   centeredSlides:false,
      // },
      // '@1.00': {
      //   slidesPerView: 3,
      //   spaceBetween: 40,
      //   centeredSlides:false,
      // },
      // '@1.50': {
      //   slidesPerView: 4,
      //   spaceBetween: 50,
      //   centeredSlides:false,
      // },
      // 900:{
      //   slidesPerView: 3,
      //   spaceBetween: 40,
      //   centeredSlides:false,
      // }
      500:{
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides:false,
      },
      900:{
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides:false,
      },
      1300:{
        slidesPerView: 4,
        spaceBetween: 50,
        centeredSlides:false,
      }
    }
   });
   
   console.log(document.querySelector("#definetly-query-me-03"))
   }, 1000) // Try to lower this number, until it stops working 🙃
 })

 document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
     const carousel = new Swiper("#definetly-query-me-02", {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 4.6,
   loop: true,
       
     coverflowEffect: {
       rotate: 0,
       stretch: 20,
       depth: -50,
       modifier: 2,
       slideShadows: true
     },
     keyboard: {
       enabled: true
     },
     mousewheel: {
       thresholdDelta: 0
     },
     spaceBetween: 120,
     loop: true,
     breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: -50,
          modifier: 1,
          slideShadows: true
        },
      },
      440: {
        slidesPerView: 3,
        spaceBetween: 60,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: -50,
          modifier: 1,
          slideShadows: true
        },
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 80,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: -50,
          modifier: 1,
          slideShadows: true
        },
      },
      1600: {
        slidesPerView: 4.6,
        spaceBetween: 50,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: -50,
          modifier: 1,
          slideShadows: true
        },
      },
    },
   });
   
   console.log(document.querySelector("#definetly-query-me-02"))
   }, 1000) // Try to lower this number, until it stops working 🙃
 })
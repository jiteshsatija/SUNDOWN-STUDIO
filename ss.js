document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#AllContent'),
        smooth: true
    });
});

 document.addEventListener('DOMContentLoaded', function () {
    var elemC = document.querySelector("#element-container");
    var fixed = document.querySelector(".fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });
    
    var elems = document.querySelectorAll(".element");
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                var image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url(${image})`;
            });
    });
});

var cursor = document.querySelector(".cursor");
var section5 = document.querySelector(".section5");

document.addEventListener("mousemove", function(e) {
    var rect = section5.getBoundingClientRect();

    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    cursor.style.cssText = "left: " + x + "px; top: " + y + "px;";

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        section5.style.cursor = "none"; 
        cursor.style.display = "block"; 
    } else {
        section5.style.cursor = "auto"; 
        cursor.style.display = "none"; 
    }
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, 
      spaceBetween: 100, 
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    });
}
  
document.addEventListener('DOMContentLoaded', function () {
  swiperAnimation();
});

document.addEventListener('DOMContentLoaded', function () {
    initScroll();
    // initMenuAnimation();
    initLoaderAnimation();
    initSection3Animation();
    initSection4Animation();
});

function initScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#AllContent'),
        smooth: true
    });

    // GSAP Animation for Section 3
    const tlSection3 = gsap.timeline();
    tlSection3.from(".element h2", {
        y: 80,
        opacity: 0,
        duration: 2,
        stagger: 0.3
    });

    // Scroll Listener for Section 3 Animation
    scroll.on('scroll', function (args) {
        const scrollPosition = args.scroll.y;
        const triggerPoint = document.querySelector('.section3').offsetTop;

        if (scrollPosition > triggerPoint) {
            tlSection3.play();
        } else {
            tlSection3.reverse();
        }
    });

    // GSAP Animation for Section 4
    const tlSection4 = gsap.timeline();
    tlSection4.from(".box", {
        x: -80,
        opacity: 0,
        // delay: 0.5,
        duration: 1,
    });

    // Scroll Listener for Section 4 Animation
    scroll.on('scroll', function (args) {
        const scrollPosition = args.scroll.y;
        const triggerPointSection4 = document.querySelector('.section4').offsetTop;

        if (scrollPosition > triggerPointSection4) {
            tlSection4.play();
        } else {
            tlSection4.reverse();
        }
    });

    // const Cursor = gsap.timeline();
    // Cursor.from(".cursor", {
    //     opacity: 0,
    //     delay: 0.5,
    //     duration: 1,
    // });

    // // Scroll Listener for Section 5 Animation
    // scroll.on('scroll', function (args) {
    //     const scrollPosition = args.scroll.y;
    //     const triggerPointSection5 = document.querySelector('.section5').offsetTop;

    //     if (scrollPosition > triggerPointSection5) {
    //         tlSection4.play();
    //     } else {
    //         tlSection4.reverse();
    //     }
    // });
}

function initLoaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}





  
  


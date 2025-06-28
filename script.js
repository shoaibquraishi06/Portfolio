function smoothScroll() {
   gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});







ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// smoothScroll()









function navBar(){
   let menu = document.querySelector('#menu-icon')
let close = document.getElementById('close-icon')
let navbar = document.querySelector('.nav-mobile')



var tl = gsap.timeline()

tl.to(".nav-mobile",{
  
     right:0,
     duration:0.5
})

tl.from(".nav-mobile a ",{
    x:100,
    duration:0.7,
    stagger:0.30,
    opacity:0
})
tl.from(".nav-mobilei ",{
   //  x:100,
    duration:0.7,
    stagger:0.30,
    opacity:0
})

tl.pause()


menu.addEventListener('click',function(){

  //  tl.play()\
  console.log("hello");
  

})

close.addEventListener('click',function(){

   tl.reverse()

   // console.log("hello");
   

})
}

// navBar()


function readMore(){
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");

  btnText.addEventListener('click',function(){
     if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "learn More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read Less";
        moreText.style.display = "inline";
    }


   // console.log("hello");
   


  })
}
readMore()


  function readMore2(){
   const dots2 = document.getElementById("dots2");
    const moreText2 = document.getElementById("more2");
    const btnText2 = document.getElementById("readMoreBtn2");

  btnText2.addEventListener('click',function(){
     if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.textContent = "learn More";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.textContent = "Read Less";
        moreText2.style.display = "inline";
    }
   })
  }
  readMore2()



 function readMore3() {
    const dots3 = document.getElementById("dots3");
    const moreText3 = document.getElementById("more3");
    const btnText3 = document.getElementById("readMoreBtn3");

  btnText3.addEventListener('click',function(){
     if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.textContent = "learn More";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.textContent = "Read Less";
        moreText3.style.display = "inline";
    }
   })

 }
 readMore3()



   // Animate progress bars on load
    document.querySelectorAll('.skill-card').forEach(card => {
      const percent = card.getAttribute('data-percent');
      const fill = card.querySelector('.progress-bar-fill');
      fill.style.width = percent + '%';
    });

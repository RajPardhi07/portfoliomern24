

function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


init()

function load() {

    var tt = gsap.timeline()
  tt.to(".yoyo h3",{
    y:-50,
    opacity:0,
    duration:2,
    stagger:0.35
  })
  
  .to(".yoyo h4",{
    y:-30,
    opacity:0,
    duration:1.6,
    stagger:0.35,
   display:"block"
  
  })
  
  .to("#loader",{
    top:"-100%",
    duration:1,
  
  })
  
  .from(".out",{
    y:"-100%",
    opacity:0,
    duration:1.5,
  
  
  },"helo")
  
  .from(".out2",{
    y:"-100%",
    opacity:0,
    duration:1.5,
    
  
  },"helo")
  
  }
  
  load();
  

gsap.from("#college h1",{
    y:50,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"#college h1",
        scroller:"#main",
        start:"top 80%",
        end:"top 79%",
        scrub:3,

    }
})

gsap.from(".college-list div",{
    scale:0.6,
    opacity:0,
    duration:0.3,
    
    scrollTrigger:{
        trigger:".college-list div",
        scroller:"#main",
        start:"top 100%",
        end:"top 100%",
        scrub:3,
        // markers:true

    }
})








var tablinks = document.getElementsByClassName("tab-links")

var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// gsap.from(".college-list div",{
//     scale:0.3,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//           trigger:"#college",
//           scroller:"body",
//           start:"top 70%",
//           end:"top 69%",
//           scrub:3,
//           markers:true
//     }
// })


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document.querySelector("#main").addEventListener("mousemove",function(dets){
    document.querySelector("#cursor").style.left=`${dets.x }px`;
    document.querySelector("#cursor").style.top=`${dets.y}px`;
    



})


document.querySelector("#row1 h1").addEventListener("mouseenter",function(dets){
  document.querySelector("#row1 h2").style.left="65%"
  document.querySelector("#row1 h2").style.opacity="1"
  document.querySelector("#cursor").style.opacity="0"
})
document.querySelector("#row1 h1").addEventListener("mouseleave",function(dets){
  document.querySelector("#row1 h2").style.left="50%"
  document.querySelector("#row1 h2").style.opacity="0"
  document.querySelector("#cursor").style.opacity="1"
})
document.querySelector("#row2 h1").addEventListener("mouseenter",function(dets){
  document.querySelector("#row2 h2").style.left="70%"
  document.querySelector("#row2 h2").style.opacity="1"
  document.querySelector("#cursor").style.opacity="0"
})
document.querySelector("#row2 h1").addEventListener("mouseleave",function(dets){
  document.querySelector("#row2 h2").style.left="50%"
  document.querySelector("#row2 h2").style.opacity="0"
  document.querySelector("#cursor").style.opacity="1"
})
document.querySelector("#row3 h1").addEventListener("mouseenter",function(dets){
  document.querySelector("#row3 h2").style.left="13%"
  document.querySelector("#row3 h2").style.opacity="1"
  document.querySelector("#cursor").style.opacity="0"
})
document.querySelector("#row3 h1").addEventListener("mouseleave",function(dets){
  document.querySelector("#row3 h2").style.left="20%"
  document.querySelector("#row3 h2").style.opacity="0"
  document.querySelector("#cursor").style.opacity="1"
})

document.querySelector("#page2 .btn").addEventListener("mouseenter",function(dets){
  
  document.querySelector("#cursor").style.opacity="0"
})
document.querySelector("#page2 .btn").addEventListener("mouseleave",function(dets){
  
  document.querySelector("#cursor").style.opacity="1"
})



gsap.to("#page1 #row1 h1",{
  x:"-10%",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"bottom 100%",
    end:"bottom 40%",
    scrub:1
  }
})
gsap.to("#page1 #row3 h1",{
  x:"10%",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"bottom 100%",
    end:"bottom 40%",
    scrub:1
  }
})


gsap.to("#page3 #one",{
  left:"40%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})
gsap.to("#page3 #two",{
  right:"40%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})

gsap.to("#page3 #three",{
  left:"40%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})

gsap.to("#page3 #four",{
  right:"40%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})






document.querySelector("#left-bottom").addEventListener("mousemove",function(dets){
  document.querySelector("#first").style.left=`${dets.x+30}px`
  document.querySelector("#first").style.top=`${dets.y+30}px`


 
})
document.querySelector("#left-bottom").addEventListener("mouseenter",function(dets){
  document.querySelector("#first").style.opacity=1
  
  document.querySelector("#cursor").style.scale=7
  document.querySelector("#cursor h2").style.scale=0.2
  document.querySelector("#cursor h2").style.opacity=1

  
  
  
 
})
document.querySelector("#left-bottom").addEventListener("mouseleave",function(dets){
  document.querySelector("#first").style.opacity=0
  
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor h2").style.opacity=0
  
  
 
})
document.querySelector("#left-bottom").addEventListener("mouseenter",function(dets){
  document.querySelector("#textbtn").style.opacity=1
  
 
  
  
  
 
})
document.querySelector("#left-bottom").addEventListener("mouseleave",function(dets){
  document.querySelector("#textbtn").style.opacity=0
  
 
})


document.querySelector("#right-top").addEventListener("mousemove",function(dets){
  document.querySelector("#second").style.left=`${dets.x+30}px`
  document.querySelector("#second").style.top=`${dets.y+30}px`


 
})
document.querySelector("#right-top").addEventListener("mouseenter",function(dets){
  document.querySelector("#second").style.opacity=1
  
  document.querySelector("#cursor").style.scale=7
  document.querySelector("#cursor h2").style.scale=0.2
  document.querySelector("#cursor h2").style.opacity=1

  
  
  
  
 
})
document.querySelector("#right-top").addEventListener("mouseleave",function(dets){
  document.querySelector("#second").style.opacity=0
  
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor h2").style.opacity=0
  
  
 
})
document.querySelector("#right-top").addEventListener("mouseenter",function(dets){
  document.querySelector("#textbtn2").style.opacity=1
  
 
  
  
  
 
})
document.querySelector("#right-top").addEventListener("mouseleave",function(dets){
  document.querySelector("#textbtn2").style.opacity=0
  
 
})



document.querySelector("#scr1").addEventListener("mousemove",function(dets){
  document.querySelector("#box1").style.left=`${dets.x}px`
  document.querySelector("#box1").style.top=`${dets.y}px`
  document.querySelector("#box1").style.opacity=1
  document.querySelector("#cursor").style.opacity=0
  
})

document.querySelector("#scr1").addEventListener("mouseleave",function(dets){
  document.querySelector("#box1").style.left=`${dets.x}px`
  document.querySelector("#box1").style.top=`${dets.y}px`
  document.querySelector("#box1").style.opacity=0
  document.querySelector("#cursor").style.opacity=1
})



document.querySelector("#scr2").addEventListener("mousemove",function(dets){
  document.querySelector("#box2").style.left=`${dets.x}px`
  document.querySelector("#box2").style.top=`${dets.y}px`
  document.querySelector("#box2").style.opacity=1
  document.querySelector("#cursor").style.opacity=0
})

document.querySelector("#scr2").addEventListener("mouseleave",function(dets){
  document.querySelector("#box2").style.left=`${dets.x}px`
  document.querySelector("#box2").style.top=`${dets.y}px`
  document.querySelector("#box2").style.opacity=0
  document.querySelector("#cursor").style.opacity=1
})


document.querySelector("#scr3").addEventListener("mousemove",function(dets){
  document.querySelector("#box3").style.left=`${dets.x}px`
  document.querySelector("#box3").style.top=`${dets.y}px`
  document.querySelector("#box3").style.opacity=1
  document.querySelector("#cursor").style.opacity=0
})

document.querySelector("#scr3").addEventListener("mouseleave",function(dets){
  document.querySelector("#box3").style.left=`${dets.x}px`
  document.querySelector("#box3").style.top=`${dets.y}px`
  document.querySelector("#box3").style.opacity=0
  document.querySelector("#cursor").style.opacity=1
})

gsap.to("#page3",{
  backgroundColor:"#222222",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 50%",
    scrub:2
  }
})
// gsap.to("#nav svg",{
 
//   scrollTrigger:{
//     trigger:"#page3",
//     scroller:"#main",
//     // markers:true,
//     start:"top 60%",
//     end:"top 50%",
//     scrub:2
//   }
// })
// gsap.to("#nav i",{
//   color:"white",
//   scrollTrigger:{
//     trigger:"#page3",
//     scroller:"#main",
//     // markers:true,
//     start:"top 60%",
//     end:"top 50%",
//     scrub:2
//   }
// })
gsap.to("#page2",{
  backgroundColor:"#222222",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"bottom 60%",
    end:"bottom 50%",
    scrub:2
  }
})
gsap.to("#page4",{
  backgroundColor:"#222222",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 50%",
    scrub:2
  }
})
gsap.to("#page5",{
  backgroundColor:"#fff",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top -30%",
    end:"top -40%",
    scrub:2
  }
})
// gsap.to("#page6",{
//   backgroundColor:"#222222",
//   scrollTrigger:{
//     trigger:"#page6",
//     scroller:"#main",
//     markers:true,
//     start:"bottom 0%",
//     end:"bottom 50%",
//     scrub:2
//   }
// })

// document.querySelector("#img").addEventListener("mousemove",function(dets){
//   document.querySelector("#img h1").style.left=`${dets.x}px`
//   document.querySelector("#img h1").style.top=`${dets.y}px`
//   document.querySelector("#cursor").style.scrollerBehaviour="smooth"


 
// })

document.querySelector("#img").addEventListener("mouseenter", function(dets){
  
  document.querySelector("#cursor").style.scale=7;
  document.querySelector("#cursor h2").innerHTML="See our available options"
  document.querySelector("#cursor h2").style.scale=0.2
  document.querySelector("#cursor h2").style.opacity=1

 
})
document.querySelector("#img").addEventListener("mouseleave", function(dets){
  
  document.querySelector("#cursor").style.scale=1;
  document.querySelector("#cursor h2").style.opacity=0
})

gsap.to("#page7 #elem1",{
  left:"25%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top -20%",
    scrub:2
  }
})
gsap.to("#page7 #elem2",{
  right:"12%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top -20%",
    scrub:2
  }
})


document.querySelector("#small-text h1 span").addEventListener("mousemove",function(dets){
  document.querySelector("#haddi").style.left=`${dets.x}px`
  document.querySelector("#haddi").style.top=`${dets.y-170}px`
  


 
})
document.querySelector("#small-text h1 span").addEventListener("mouseenter",function(dets){
  document.querySelector("#haddi").style.opacity=1
  document.querySelector("#cursor").style.opacity=0
  
  
  
  
  
 
})
document.querySelector("#small-text h1 span").addEventListener("mouseleave",function(dets){
  document.querySelector("#haddi").style.opacity=0
  document.querySelector("#cursor").style.opacity=1
  
  
 
})


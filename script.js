//! Custom cursor--------------------------------------------------->
var mainCursor = document.querySelector("#mainCursor");
var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});


//! Nav Animation---------------------------------------------------> 
var headerTimeline = gsap.timeline()

headerTimeline.from("header h1",{
    opacity:0,
    y:-30,
    duration:0.3,
    delay:0.5,
    scale:0.2
})

headerTimeline.from("header .scrollArrow",{
    opacity:0,
    y:-30,
    duration:0.3,
    scale:0.2
})

headerTimeline.from("header .resumeBtn",{
    opacity:0,
    y:-30,
    duration:0.3,
    scale:0.2
})

headerTimeline.from(".main-intro-container h1",{
    opacity:0,
    scale:0.2,
    duration:0.5,
})

if (window.innerWidth <= 450) {
  // Phone screen animation
  headerTimeline.from(".profilePhoto .aboutimg-phone", {
    opacity: 0,
    scale: 0.2,
    duration: 1,
  });
} else {
  // Desktop screen animation
  headerTimeline.from(".profilePhoto .aboutimg", {
    opacity: 0,
    scale: 0.2,
    duration: 1,
  });
}

//! Arrow Rotation-------------------------------------------------->
gsap.to(".scrollArrow img",{
    rotate:"90",
    scrollTrigger:{
        trigger:".scrollArrow img",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -150%",
        scrub:0.2,
    }
})

//! Scrolling name ------------------------------------------------>

gsap.to(".scroll-track", {
    xPercent: -50,
    repeat: -1,
    duration: 15,
    ease: "linear"
  });

//! image effect of hover------------------------->

  const img = document.querySelector(".aboutimg");

document.querySelector(".profilePhoto").addEventListener("mousemove", (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Reduced tilt from 20deg to 8deg max
  const offsetX = (x / rect.width - 1) * 8;
  const offsetY = (y / rect.height - 1) * 8;

  gsap.to(img, {
    rotateX: -offsetY,
    rotateY: offsetX,
    duration: 0.3,
    ease: "power2.out"
  });
});

document.querySelector(".profilePhoto").addEventListener("mouseleave", () => {
  gsap.to(img, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.4,
    ease: "power2.out"
  });
});

// phone screen img 

 const imgPhone = document.querySelector(".aboutimg-phone");

document.querySelector(".profilePhoto").addEventListener("mousemove", (e) => {
  const rect = imgPhone.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Reduced tilt from 20deg to 8deg max
  const offsetX = (x / rect.width - 1) * 8;
  const offsetY = (y / rect.height - 1) * 8;

  gsap.to(imgPhone, {
    rotateX: -offsetY,
    rotateY: offsetX,
    duration: 0.3,
    ease: "power2.out"
  });
});

document.querySelector(".profilePhoto").addEventListener("mouseleave", () => {
  gsap.to(imgPhone, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.4,
    ease: "power2.out"
  });
});


 





//! About Section-------------------------------->



var aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-about-section", // Trigger the whole timeline when section appears
    scroller: "body",
    start: "top 80%", // Animation will start when .main-about-section comes 80% from top
    markers: false // Optional: shows markers for debugging
  }
});

aboutTimeline.from(".main-about-section h1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.2,
});

aboutTimeline.from(".main-about-section h2", {
  opacity: 0,
  y: 20,
  duration: 1,
});

//! About section 2 ---------------->

var aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-about-section-2", // Trigger the whole timeline when section appears
    scroller: "body",
    start: "top 80%", // Animation will start when .main-about-section comes 80% from top
    markers: false // Optional: shows markers for debugging
  }
});



aboutTimeline.from(".main-about-section-2 h2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay:0.2
});

//! About section 3 ---------------->

var aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-about-section-3", // Trigger the whole timeline when section appears
    scroller: "body",
    start: "top 80%", // Animation will start when .main-about-section comes 80% from top
    markers: false // Optional: shows markers for debugging
  }
});



aboutTimeline.from(".main-about-section-3 h2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay:0.2
});

//! About section btn ---------------->

var btnTimeline = gsap.timeline({
  scrollTrigger:{
    trigger:".about-section-btn-wrapper",
    scroller:"body",
    start:"top 90%",
    // markers:true
  }
})

btnTimeline.from(".about-section-btn-wrapper .btn1, .btn2",{
  opacity: 0,
  y: 20,
  duration: 1,
  // delay:0.2
})

//! Timeline for skills section -- For Dev Skills

var skillTimeline = gsap.timeline({
  scrollTrigger:{
    trigger:".skills-container",
    scroller:"body",
    start:"top 80%",
    // markers:true
  }
})

skillTimeline.from(".skills-container .development .dev",{
  opacity:0,
  y:20,
  duration:1,
  delay:0.5
})

skillTimeline.from(".skills-container .dev-skills-container img",{
  opacity:0,
  y:20,
  duration:1,
  stagger:0.2
})

//! Timeline for skills section -- For Design Skills

var designSkill = gsap.timeline({
  scrollTrigger:{
    trigger:".skills-container-design",
    scroller:"body",
    start:"top 80%",
    // markers:true
  }
})

designSkill.from(".skills-container-design .designing .des",{
  opacity:0,
  y:20,
  duration:1,
  delay:0.5
})

designSkill.from(".skills-container-design .des-skills-container img",{
  opacity:0,
  y:20,
  duration:1,
  stagger:0.2
})


//! Timeline for skills section -- For Tools Skills

var toolSkill = gsap.timeline({
  scrollTrigger:{
    trigger:".skills-container-tool",
    scroller:"body",
    start:"top 80%",
    // markers:true
  }
})

toolSkill.from(".skills-container-tool .tool .dev-tool",{
  opacity:0,
  y:20,
  duration:1,
  delay:0.5
})

toolSkill.from(".skills-container-tool .dev-skills-container-tool img",{
  opacity:0,
  y:20,
  duration:1,
  stagger:0.2
})

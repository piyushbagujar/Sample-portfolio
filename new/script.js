var tl = gsap.timeline();

tl.to(".reveal", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
})
.to(".reveal1", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
}, "-=0.5") 
.to(".reveal2", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
}, "-=0.5") 
gsap.to(".reveal3", {
    y: "-100%",  
    duration: 1.5,  
    delay: 1,  
    ease: "Circ.easeInOut",  
    scrollTrigger: {  
      trigger: ".reveal3",  
      start: "top 80%",  
      toggleActions: "play none none reverse",  
    }
})
gsap.to(".reveal4", {
    y: "-100%",  
    duration: 1.5,  
    delay: 1,  
    ease: "Circ.easeInOut",  
    scrollTrigger: {  
      trigger: ".reveal4",  
      start: "top 80%",
      end:"top 20%",   
      toggleActions: "play none none reverse",
      markers: true  
    }
})

  
  
  

const tl= gsap.timeline({defaults: {ease:"power2.out"}});

tl.to(".text",{y:"0%", duration:1,stagger:0.25});
tl.to(".slider",{y:"-100%",duration:1, delay: 0.5});
tl.to(".intro",{y:"-100%", duration:1},"-=1");
tl.fromTo('nav',{opacity:0}, {opacity:1,  duration:1});
tl.fromTo(".bigtext",{opacity:0}, {opacity:1,  duration:1},"-=1");
tl.fromTo(".btn",{opacity:0}, {opacity:1,  duration:1},"-=1");
tl.fromTo(".slideshow-container",{opacity:0}, {opacity:1,  duration:1},"-=1");
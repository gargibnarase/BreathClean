/* smooth navigation */

document.querySelectorAll('.nav-links a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:'smooth'});

});

});


/* AIR PARTICLE GENERATOR */

const container = document.querySelector(".air-particles");

for(let i=0;i<28;i++){

const particle = document.createElement("span");

const size = Math.random()*4 + 2;

particle.style.width = size + "px";
particle.style.height = size + "px";

particle.style.left = Math.random()*100 + "%";
particle.style.top = Math.random()*100 + "%";

particle.style.animationDuration = (Math.random()*18 + 12) + "s";
particle.style.animationDelay = Math.random()*10 + "s";

container.appendChild(particle);

}
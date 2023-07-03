const menuWork = document.querySelector('.header');

console.log("Hello World!");
// const h1 = document.querySelector('h1');

// h1.addEventListener('click', function(){
//   h1.style.padding = '5rem';
//   h1.innerText = 'Created by Shiv Pratap';
//   h1.style.backgroundColor = 'red';
// })

//set current year
const currentYear = document.querySelector('.year');
currentYear.innerText = new Date().getFullYear();

const allLink = document.querySelectorAll('a:link');



//menu-bar working
const menuButton = document.querySelector('.main-nav-btn');
menuButton.addEventListener('click', function(){
  console.log(menuWork.innerHTML);
  menuWork.classList.toggle('nav-open');
})

//making menu bar disappear when clicked
allLink.forEach(function(link){
link.addEventListener('click', () => {
  if(link.classList.contains('nav-blocks')){
    menuWork.classList.toggle('nav-open');
  }
})
});

//Sticky navigations
const sectionEl = document.querySelector('.Section-Hero');
const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);
  if(!ent.isIntersecting){
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting){
    document.body.classList.remove('sticky');
    
  }
}, 
{
  root: null,
  threshold: 0,
});
obs.observe(sectionEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

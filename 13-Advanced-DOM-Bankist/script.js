'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////////////////////////
// implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect())

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset);


  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  section1.scrollIntoView({ behavior: 'smooth' })
});

//////////////////////////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id)
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })

// Implementing Page navigation using Event Delegation

// !. Add event listener to a common parent container.
// 2. Determine which element originated the event 
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target)
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK')
    const id = e.target.getAttribute('href');
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked)

  // Guard clause
  if (!clicked) return;

  // remove Active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  // Activate tab
  clicked.classList.add('operations__tab--active')

  // Activate content area
  console.log(clicked.dataset.tab)
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

// Menu fade animation
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    })
    logo.style.opacity = 0.5;
  }
})

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    })
    logo.style.opacity = 1;
  }
})

///////////////////////////////////////////////////////
// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY)

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

//////////////////////////////////////////////////////////////
// sticky navigation : using Intersection observer API
// target element : section1
// root element is going to intersect target element

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// }

// const obsOption = {
//   root: null,
//   threshold: 0.1,
// }
// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry)
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${navHeight}px` });

headerObserver.observe(header)

//////////////////////////////////////////////////////////////
// Reveal section on scroll
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15, });

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

/////////////////////////////////////////////////////////
// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets)

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry)

  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');

  });
  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, { root: null, threshold: 0, rootMargin: '-200px' });

imgTargets.forEach(img => imgObserver.observe(img));

// Slider component
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-1200px)';
  // slider.style.overflow = 'visible';

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }
  createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')

  }
  activateDot(0);

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    // -100% 0% 100%
  }
  goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    }
    else {
      curSlide++;
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }
  // Next slide
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT')
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  })
}
slider();
//////////////////////////////////////////
//////////////////////////////////////////
// lectures
/*
// Selecting Elements
console.log(document.documentElement)
console.log(document.head)

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1')
const allButtons = (document.getElementsByTagName('button'))
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

// Creating and inserting Elements
const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'we use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it</button>';

header.prepend(message) // First child of header element
header.append(message)  // Last child of header element
// header.prepend(message.cloneNode(true))

// Add element as Siblings
// header.before(message)
// header.after(message)

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.parentElement.removeChild(message);
  message.remove();
})

// Styles
message.style.backgroundColor = '#202124'
message.style.width = '100%'
message.style.height = '80px'

console.log(message.style.color)
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.src) // Absolute URl
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo'

// setAttribute and getAttribute
logo.setAttribute('company', 'bankist')
console.log(logo.getAttribute('company'))
console.log(logo.getAttribute('src')) // Relative URL

// Data Attributes
console.log(logo.dataset.versionNumber) // camelcase

// Classes
logo.classList.add('classname')
logo.classList.remove('classname')
logo.classList.toggle('classname')
logo.classList.contains('classname')

///////////////////////////////////////////////////////////////
// implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect())

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset);


  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  section1.scrollIntoView({ behavior: 'smooth' })
});

////////////////////////////////////////////////////////////
// listining to an Event
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('the function is over in the of the main in of the main of the city')
  // h1.removeEventListener('mouseenter', alertH1)
}
h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000);

// using eventlistener method
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the h1 :D ')
// })

// by using onmouseenter property (old way)
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the h1 :D ')
// }

// Note:- we can add multiple function on addEventListener() and NOT on the onmouseenter property

/////////////////////////////////////////////////////////////
// Event propagation in practice

// rgb(255,255, 255)
const randomInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor())

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget)
  // console.log(e.currentTarget === this)

  // Stop propagation
  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget)
})

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget)
})

// Note:- As we click on the link element its event bubbles up to its parent elements (event bubbling)

// DOM Traversing
const h1 = document.querySelector('h1')

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'lightblue';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('Html parsed and DOM tree build', e);
})

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e)
})

// Asking before leaving page

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e)
//   e.returnValue = '';
// })
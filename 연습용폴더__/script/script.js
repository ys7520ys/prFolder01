const textElement = document.querySelector('.text');
  // 텍스트 애니메이션을 동작할 요소의 값을 설정함
const textContent = textElement.textContent;
  // .text에 적힌 텍스트를 긁어와서 변수에 저장한다.
textElement.innerHTML = ''; // 초기 텍스트를 지워서 한 글자씩 추가 예정

textContent.split('').forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  textElement.appendChild(span);
});
gsap.to('.text span', {
  opacity: 1,
    // 초기에 0으로 설정한 텍스트의 값을 1로 변경하여 화면에 등장하도록 설정한다.
  stagger: 0.05, // 각 글자가 순차적으로 등장하도록 간격 설정
  duration: 0.5, // 각 글자의 애니메이션 지속 시간
  ease: "power2.out", // 부드러운 이징 적용
});


const text = "당신의 삶에 있어서 원동력은 어떠한 색깔을 지니고 있는가"; 
const typingSpeed = 130;
let index = 0; 

function type() {
  document.getElementById("typingText").textContent = text.slice(0, index);
  index++; 
  if (index <= text.length) {
    setTimeout(type, typingSpeed); 
  }
}
type();









//-- 하나의 요소를 동작할 때 --
// const targetElement = document.querySelector('.box');
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       observer.unobserve(entry.target);
//     }
//   });
// }, { threshold: 1 }); 
// targetElement.style.opacity = 0;
// observer.observe(targetElement);

// 요소의 이름을 .box로 지정하면 해당 클래스가 화면에 등장하면 바로 감시의 값이 동작하여 화면에 등장한다.
//    동일한 이름으로 설정해도 상관이 없다. 하지만 class로 지정된 상태이므로 추가적인 클래스나 id의 값으로 css의 값을 설정해야 한다. 
const targetElements = document.querySelectorAll('.box');
// const targetElementBgc = document.querySelector('.content.B');
targetElements.forEach(element => {
  element.style.opacity = 0;
});
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 만약 화면에 요소가 등장한 경웨 동작할 코드
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(-100px)"
      
      // observer.unobserve(entry.target); 
      // L> 원래 코드에서는 해당 요소의 감시를 제거하도록 구성하지만 다시 화면에서 등장하는 것을 확인해야 하기 때문에 감시를 계속해서 하도록 설정하였다

    // 만약 화면에 요소가 사라졌을 때 동작할 코드
    } else{
      entry.target.style.opacity = 0;
      entry.target.style.transform = "translateY(0px)"

      // entry.target.style.opacity = 0;
      // entry.target.style.transform = "translateY(0px)"
      // 해당 요소의 값이 화면에서 사라지면 opacity의 값을 0으로 변경하도록 설정하였다. 그래서 스크롤이 동작하면서 해당 요소의 값이 화면에서 없어지면 사라지는 것이다.
    }
  });
}, { threshold: 0.4 }); // 40퍼센트가 화면에서 보이면 이러한 동작을 진행한다.
targetElements.forEach(element => {
  observer.observe(element);
});


// 해당 요소가 등장하면 두 번째 content 배경의 값을 검정으로 변경한다.
// const bgObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       gsap.to(targetElementBgc, {
//         backgroundColor: "black",
//         duration: 1.5, 
//         ease: "power2.out" 
//       });
//     } else {
//       gsap.to(targetElementBgc, {
//         backgroundColor: "white",
//         duration: 1.5,
//         ease: "power2.out"
//       });
//     }
//   });
// }, { threshold: 0.8 }); 

// bgObserver.observe(targetElementBgc);


// const targetElementBgc = document.querySelector('.content.B');

// const bgObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && entry.boundingClientRect.top < 0) {
//       targetElementBgc.style.backgroundColor = "black";
//     } else {
//     }
//   });
// }, { threshold: 0.1 }); 

// bgObserver.observe(targetElementBgc);




// const contentA = document.querySelector('.content.A');
// const contentB = document.querySelector('body');
// const contentB_Box = document.querySelector('.box');

// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       contentB_Box.style.rotate = "2deg";
//     } else {
//     }
//   });
// }, { threshold: 0.2 }); 

// observer2.observe(contentA);






// const contentA = document.querySelector('.content.A');
// const contentB = document.querySelector('body');

// let hasExited = false; // content.A가 한 번 화면에서 벗어났는지 확인하기 위한 플래그

// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting && !hasExited) {
//       // content.A가 처음으로 화면에서 벗어났을 때
//       contentB.style.backgroundColor = "black";
//       hasExited = true; // 한 번 벗어났음을 기록
//     }
//     else{
//       contentB.style.backgroundColor = "white";
//     }
//   });
// }, { threshold: 0.1 });

// observer2.observe(contentA);







// const contentA = document.querySelector('.content.A');
// const pageContainer = document.querySelector('body');
// const boxColor = document.querySelectorAll('.box');
// let isPassed = false; 

// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting && !isPassed) {
//       pageContainer.style.backgroundColor = "black";
//       isPassed = true; 
//     } else if (entry.isIntersecting && isPassed) {
//       pageContainer.style.backgroundColor = "white";
//       isPassed = false; 
//     }
//   });
// }, { threshold: 0.1 });

// observer2.observe(contentA);








// 가상 요소의 값을 사용해서 텍스트의 값을 자동으로 타이핑한다.

// DOM이 구성되면 addEventListener를 통해서 화면의 값을 구성한다.
document.addEventListener("DOMContentLoaded", () => {
  const contentBlur = document.querySelectorAll('.content');
  setTimeout(() => {
  }, 1000); 

  contentBlur.forEach((element) => {
    setTimeout(() => {
      element.style.filter = 'blur(0px)';
    }, 300); 
  });
});















// document.addEventListener("DOMContentLoaded", function () {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     multiplier: 0.5, 
//     smartphone: {
//       smooth: true
//     },
//     tablet: {
//       smooth: true
//     }
//   });
// });








// let lastScrollY = 0;

// window.addEventListener('scroll', () => {
//   const header = document.querySelector('.header');
//   if (window.scrollY > lastScrollY) {
//     header.style.top = '-60px'; 
//     console.log("if header동작함")
//   } else {
//     header.style.top = '0';
//   }
//   lastScrollY = window.scrollY;
// });


// 스크롤의 동작에 따른 유동적인 헤더숨김
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.5,
    smartphone: { smooth: true },
    tablet: { smooth: true }
  });

  const header = document.querySelector('.header');
  let lastScrollY = 0;

  scroll.on('scroll', (event) => {
    const currentScrollY = event.scroll.y;

    if (currentScrollY > lastScrollY) {
      // 아래로 스크롤 -> 헤더 숨기기
      header.style.top = '-60px';
    } else {
      // 위로 스크롤 -> 헤더 보이기
      header.style.top = '0';
    }

    lastScrollY = currentScrollY;
  });
});

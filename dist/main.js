const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
   nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
   nav.classList.remove('menu-btn');
});

//  Swapping PDF language
const switchLangBtnAfr = document.getElementById('switchLangBtnAfr');
const switchLangBtnEng = document.getElementById('switchLangBtnEng');
const showAfr = document.getElementById('afrpdf');
const showEng = document.getElementById('engpdf');

switchLangBtnAfr.addEventListener('click', () => {
   showEng.classList.add('hide');
   showAfr.classList.remove('hide');
   switchLangBtnEng.classList.remove('hide');
   switchLangBtnAfr.classList.add('hide');
});
switchLangBtnEng.addEventListener('click', () => {
   showEng.classList.remove('hide');
   showAfr.classList.add('hide');
   switchLangBtnEng.classList.add('hide');
   switchLangBtnAfr.classList.remove('hide');
});

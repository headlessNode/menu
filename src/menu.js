import "./menuStyle.css";

// DOM
const wrapper =
  document.querySelector(".wrapper");
const menuBtn =
  document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.classList.add('menu-btn-show');
menuBtn.innerHTML ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="menu-icon" viewBox="0 0 40 60" xml:space="preserve"><switch><g><path id="btm-line" class="st0" d="M2 17.72h36"/><path id="mid-line" class="st0" d="M38 30H2"/><path id="top-line" class="st0" d="M2 42.28h36"/></g></switch></svg>';
wrapper.appendChild(menuBtn);

const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu-hide');
const svgBackground = `url('data:image/svg+xml,<svg class="svg-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 80" style="enable-background:new 0 0 40 80" xml:space="preserve"><style type="text/css"> %23top-circle { animation-name: topCircleAnimation; animation-duration: 2s; animation-timing-function: ease-in-out; animation-iteration-count: 1; animation-fill-mode: forwards; } %23mid-circle { animation-name: midCircleAnimation; animation-duration: 1.9s; animation-timing-function: ease-in-out; animation-iteration-count: 1; animation-fill-mode: forwards; } @keyframes topCircleAnimation { from { transform: scale(0); } to { transform: scale(1); } } @keyframes midCircleAnimation { from { transform: scale(0); } to { transform: scale(1); } } </style><switch><g><ellipse id="mid-circle" cx="6.5" cy="7" rx="43.5" ry="39" style="fill:%239d4edd"/><ellipse id="top-circle" cx="2" cy="9" rx="40" ry="37" style="fill:%237b2cbf"/></g></switch></svg>')`;
wrapper.appendChild(menu);

const hideMenuBtn = document.createElement('button');
hideMenuBtn.classList.add('hide-menu-btn');
hideMenuBtn.classList.add('remove-hide-btn');
hideMenuBtn.innerHTML = '<svg class="cross-icon" xml:space="preserve" viewBox="0 0 40 40"><switch><g stroke="#000" stroke-linecap="round" stroke-miterlimit="10"><path d="M10 29.19 30 9"/><path fill="#fff" d="M30 29.19 10 9"/></g></switch></svg>';
wrapper.appendChild(hideMenuBtn);

function showMenu(){
  menuBtn.classList.remove('menu-btn-show');
  menuBtn.classList.add('menu-btn-hide');
  menu.classList.remove('menu-hide');
  menu.classList.add('menu-show');
  menu.style.background = svgBackground;
  menu.style.backgroundRepeat = 'no-repeat';
  menu.style.backgroundSize = 'cover';
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){
  menuBtn.classList.remove('menu-btn-hide');
  menuBtn.classList.add('menu-btn-show');
  menu.classList.remove('menu-show');
  menu.classList.add('menu-hide');
  menu.style.background = 'none';
  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
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
const svg = document.createElement('svg');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.setAttribute('viewBox', '0 0 40 80');
svg.setAttribute('xml:space', 'preserve');
svg.innerHTML = '<switch><g><path class="top-circle" d="M40 36C37 48 25 57 0 54 0 34-.13 9.66 0 0h40v36z" style="fill:#9d4edd"/><path class="mid-circle" d="M40 18c1 9 0 33-40 36C0 34-.13 9.66 0 0h40v18z" style="fill:#7b2cbf"/></g></switch>'
menu.appendChild(svg);
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
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){
  menuBtn.classList.remove('menu-btn-hide');
  menuBtn.classList.add('menu-btn-show');
  menu.classList.remove('menu-show');
  menu.classList.add('menu-hide');
  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
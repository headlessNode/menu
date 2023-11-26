import "./menuStyle.css";

// DOM
const wrapper = document.querySelector(".wrapper");
// PAGE HEADER
const header = document.createElement('div');
header.classList.add('header');
wrapper.appendChild(header);
// MENU BTN
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="menu-icon" viewBox="0 0 40 60" xml:space="preserve"><switch><g><path id="btm-line" class="st0" d="M2 17.72h36"/><path id="mid-line" class="st0" d="M38 30H2"/><path id="top-line" class="st0" d="M2 42.28h36"/></g></switch></svg>';
header.appendChild(menuBtn);
// HEADER HEADING
const heading = document.createElement('h1');
heading.textContent = "Menu Design"
header.appendChild(heading);
// MAIN BODY
const mainBody = document.createElement('div');
mainBody.classList.add('main-body');
const mainBodyHeader = document.createElement('h2');
mainBodyHeader.classList.add('main-body-header');
mainBodyHeader.textContent = 'Lorem Ipsum';
// MAIN BODY CONTENT
const mainBodyContent = document.createElement('div');
mainBodyContent.classList.add('main-body-content');

const mainBodyParagraphOne = document.createElement('p');
mainBodyParagraphOne.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphTwo = document.createElement('p');
mainBodyParagraphTwo.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphThree = document.createElement('p');
mainBodyParagraphThree.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphFour = document.createElement('p');
mainBodyParagraphFour.textContent = 'Lorem Ipsum is simply dummy text';

mainBodyContent.appendChild(mainBodyParagraphOne);
mainBodyContent.appendChild(mainBodyParagraphTwo);
mainBodyContent.appendChild(mainBodyParagraphThree);
mainBodyContent.appendChild(mainBodyParagraphFour);

mainBody.appendChild(mainBodyHeader);
mainBody.appendChild(mainBodyContent);

wrapper.appendChild(mainBody);

// MENU

const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu-remove');
const menuTop = document.createElement('div');
menuTop.classList.add('menu-top');
const menuItemsContainer = document.createElement('menuItenContainer');
menuItemsContainer.classList.add('menu-items-container');
const menuItemOne = document.createElement('p');
menuItemOne.textContent = "Home";
const menuItemTwo = document.createElement('p');
menuItemTwo.textContent = "Feedback";
const menuItemThree = document.createElement('p');
menuItemThree.textContent = "Settings";
const menuItemFour = document.createElement('p');
menuItemFour.textContent = "Logout";


const menuPic = document.createElement('div');
menuPic.classList.add('menu-pic');
menuPic.innerHTML = '<svg fill="#000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>';
menuItemsContainer.appendChild(menuItemOne);
menuItemsContainer.appendChild(menuItemTwo);
menuItemsContainer.appendChild(menuItemThree);
menuItemsContainer.appendChild(menuItemFour);
menuItemsContainer.appendChild(menuPic);

menuTop.appendChild(menuItemsContainer);

const menuBottom = document.createElement('div');
menuBottom.classList.add('menu-btm');
const menuModal = document.createElement('div');
menuModal.classList.add('menu-modal');

menu.appendChild(menuTop);
menu.appendChild(menuBottom);
menu.appendChild(menuModal);


const hideMenuBtn = document.createElement('button');
hideMenuBtn.classList.add('hide-menu-btn');
hideMenuBtn.classList.add('remove-hide-btn');
hideMenuBtn.innerHTML = '<svg class="cross-icon" xml:space="preserve" viewBox="0 0 40 40"><switch><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10"><path d="M10 29.19 30 9"/><path fill="#fff" d="M30 29.19 10 9"/></g></switch></svg>';
menu.appendChild(hideMenuBtn);

wrapper.appendChild(menu);

function showMenu(){
  
  // main menu container
  menu.classList.remove('menu-hide-visually');
  menu.classList.remove('menu-remove');
  // menu top
  menuTop.classList.remove("hide-menu-top");
  // menu bottom
  menuBottom.classList.remove("hide-menu-btm");
  // menu modal
  menuModal.classList.remove("menu-modal-hide");
  
  menu.classList.add('menu-show');
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){

  menu.classList.remove('menu-show');
  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
  menuTop.classList.add("hide-menu-top");
  menuBottom.classList.add("hide-menu-btm");
  menuModal.classList.add("menu-modal-hide");
  menu.classList.add('menu-hide-visually');


  setTimeout(()=>{
    menu.classList.add('menu-remove');
    menuBtn.classList.add('menu-btn-show');
  }, 1000);

}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
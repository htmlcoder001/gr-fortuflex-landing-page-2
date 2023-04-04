const hamb = document.querySelector("#hamb");
const menuMobail = document.querySelector("#menu-mobail")

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  hamb.classList.toggle("active");
  menuMobail.classList.toggle("active");
}
// Закрытие меню при клике на меню
function closeOnClick() {
  hamb.classList.remove("active");
}
// Закрытие меню при клике на ссылку меню
menuMobail.addEventListener("click", function(e) {
  if(e.target.classList.contains("header-menu-mobail-list__link")){
    hamb.classList.toggle("active");
    menuMobail.classList.toggle("active");
  }
})

const video = document.querySelector("#video");
const videoBox = document.querySelector("#video-box");
const btnVideoClose = document.querySelector("#video-close")
const videoImg = document.querySelector("#video-img");

btnVideoClose.addEventListener("click", function (){
  
  if(videoBox.classList.contains("full")){
    video.classList.remove("full");
    videoBox.classList.remove("full");
    videoImg.muted = !videoImg.muted;
  }else{
    video.classList.add("close");
  }
})

videoImg.addEventListener("click", () => {
  videoBox.classList.add("full");
  video.classList.add("full");
  videoImg.muted = !videoImg.muted;
})

// Modal Window
const modalWindow = document.querySelector("#modal-order");
const modalBtnClose = document.querySelector("#modal-close");
//Form Pac
const formPac1 = document.querySelector("#form-pac1");
const formPac2 = document.querySelector("#form-pac2");
const formPac3 = document.querySelector("#form-pac3")
//Button descktop order
const pac1Desc = document.querySelector("#pac1-desc");
const pac2Desc = document.querySelector("#pac2-desc");
const pac3Desc = document.querySelector("#pac3-desc");
//Button mobail order
const pac1Mobail = document.querySelector("#pac1-mobl");
const pac2Mobail = document.querySelector("#pac2-mobl");
const pac3Mobail = document.querySelector("#pac3-mobl");

function closeModal(window,form){
  window.classList.remove("active");
  form.classList.remove("active")
}
function openModal(window,form){
  window.classList.add("active")
  form.classList.add("active")
}
//Форма первый пакет
pac1Desc.addEventListener("click", () => {
  openModal(modalWindow,formPac1)
})
pac1Mobail.addEventListener("click", () => {
  openModal(modalWindow,formPac1)
})
modalBtnClose.addEventListener("click", () => {
  closeModal(modalWindow,formPac1);
})
formPac1.addEventListener("submit", () => {
  closeModal(modalWindow,formPac1);
})
//Форма второй пакет
pac2Desc.addEventListener("click", () => {
  openModal(modalWindow,formPac2)
})
pac2Mobail.addEventListener("click", () => {
  openModal(modalWindow,formPac2)
})
modalBtnClose.addEventListener("click", () => {
  closeModal(modalWindow,formPac2);
})
formPac2.addEventListener("submit", () => {
  closeModal(modalWindow,formPac2);
})
//Форма третий пакет
pac3Desc.addEventListener("click", () => {
  openModal(modalWindow,formPac3)
})
pac3Mobail.addEventListener("click", () => {
  openModal(modalWindow,formPac3)
})
modalBtnClose.addEventListener("click", () => {
  closeModal(modalWindow,formPac3);
})
formPac3.addEventListener("submit", () => {
  closeModal(modalWindow,formPac3);
})



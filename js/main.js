let elQuestion = document.querySelector(".header-bottom__question")
let elcloseBtn = document.querySelector(".modal__close")
let elModal = document.querySelector(".modal")


elQuestion.addEventListener("click", function(evt){
    evt.preventDefault()
    elModal.classList.add("modal--active")
})
elcloseBtn.addEventListener("click", function(){
    elModal.classList.remove("modal--active")
})
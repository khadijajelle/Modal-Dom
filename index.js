
const Modal =document.querySelector('.modal');
const btncloseModal =document.querySelector('.close-modal');
const ovarlay =document.querySelector('.overlay');
const btnsOpenModal =document.querySelectorAll('.show-modal');
function openModal(){
    Modal.classList.remove('hidden');
    ovarlay.classList.remove('hidden');

}
for (let i = 0; i< btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
    
}
btncloseModal.addEventListener('click', closeModal);
function closeModal(){
    Modal.classList.add('hidden');
    ovarlay.classList.add('hidden');
}
document.addEventListener('keydown', function(e){
    if (e.key ==='Escape'){
        Modal.classList.add('hidden');
        ovarlay.classList.add('hidden');

    }
})
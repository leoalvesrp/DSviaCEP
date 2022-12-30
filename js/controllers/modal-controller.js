 function State(){
this.container = null
this.btnClose = null
}
const state = new State();

export function init(){
  state.container = document.querySelector('#modal-contact');
  state.btnClose = document.querySelector('#modal-contact-close');

  state.btnClose.addEventListener('click', handBtnCloseClick);
  state.container.addEventListener('click', handContainerClick);


}
export function showModal(){
  state.container.classList.add('active');
}
export function closeModal(){
  state.container.classList.remove('active');
}

function handBtnCloseClick(event){
  event.preventDefault();
  closeModal()
}
function handContainerClick(event){
  event.preventDefault();
  if(event.target === this){
    closeModal()
  }
}
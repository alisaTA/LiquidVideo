const findElement = (id) => {
  let modal = document.querySelector(id);
  if (typeof(modal) == 'undefined') {
    return false;
  }

  return modal;
}

const toggleVisibility = (modal, makeVisible) => {
  modal.dataset.visible = makeVisible;
}


const constrainWindow = (fullWindow) => {
  let body = document.querySelector('body');
  body.style.overflow = fullWindow;
}


const toggleModal = (modal) => {
  if (modal.dataset.visible === 'true') {
    toggleVisibility(modal, false)
    constrainWindow('visible');
    modal.style.display = 'none';
  }else {
    toggleVisibility(modal, true)
    constrainWindow('hidden');
    modal.style.display = '';
  }
}

const handleModal = (id) => {
  let modal = findElement(id);
  if (modal) {
    toggleModal(modal);
  }
}

const setModalListener = (contactButton, id) => {
  let button = findElement(contactButton);
  if (button) {
    button.onclick = () => handleModal(id);

  }
}



export default setModalListener;

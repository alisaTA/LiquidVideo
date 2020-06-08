const setNavListener = (id) => {
  let burger = document.querySelector(id);
  let collapseElem = document.querySelector('.mobile-nav-links');
  if (burger) {
    burger.onclick = () => handleNavClick(collapseElem, burger)
  }
}


const handleNavClick = (e, burger) => {

  e.classList.toggle('nav-active')
  burger.classList.toggle('burger-active');
}


export default setNavListener;

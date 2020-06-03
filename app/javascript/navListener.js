const setNavListener = (id) => {
  let _nav = document.querySelector(id);
  let collapseElem = document.querySelector('.mobile-nav-links');
  if (_nav) {
    _nav.onclick = () => handleNavClick(collapseElem)
  }
}


const handleNavClick = (e) => {
  e.classList.toggle('nav-active')
}


export default setNavListener;

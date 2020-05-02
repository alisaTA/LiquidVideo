const setNavListener = (id) => {
  let _nav = document.querySelector(id);
  let collapseElem = document.querySelector('#navbarNavDropdown');
  if (_nav) {
    _nav.onclick = () => handleNavClick(collapseElem)
  }
}


const handleNavClick = (e) => {
  e.classList.toggle('collapse')
}


export default setNavListener;

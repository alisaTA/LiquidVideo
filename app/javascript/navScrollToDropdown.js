const handleClick = ( link ) => {
  if ( document.querySelector('#nav-burger') == null  ) {
    let links = [...document.querySelectorAll('.nav-link')];
    let notSelected = links.filter( ( l ) => l.href !== link.href )
    link.style.borderBottom = '1px solid #08213D';
    notSelected.forEach( ( l ) => {
      l.style.borderBottom = 'none';
    } )
 }
}


const scrollAndClick = ( elem, origin ) => {
  setTimeout(() => {
    let _id         = `icons ${elem}`;
    let currentItem     = document.getElementById( _id );
    currentItem.click();
  }, 1000)
}


const toggleCorrectItem = ( e, elem ) => {
  if ( /faq$/.test( elem.href )  ) { return; }

  e.preventDefault();
  let currentItem = elem.id?.split('#').join('');
  if ( currentItem ) { 
    if ( window.location.pathname !== '/' ) {
      window.location.replace('/' + elem.id );
    } else {
      scrollAndClick( currentItem, elem );
     
    }
  }
}

const handleNavScroll = ( elem ) => {
  elem.onclick = (e) => { 
    toggleCorrectItem( e, elem );
    setTimeout( () => handleClick( elem ), 100);
  };
}

const setNavScroll = ( ) => {
  let navItems = [...document.querySelectorAll( '.nav-link' )];
  if ( navItems ) {
    navItems.forEach(( link ) => handleNavScroll( link ) );
  }
}


const scrollOnReload = ( path ) => {
  if ( path.pathname === '/' ) {
    if ( path.hash === '#contact' || path.hash === '#vision' ) {
      let currentItem = path.hash.split('#').join('');
      let _id         = `icons ${currentItem}`;
      currentItem     = document.getElementById( _id );
      setTimeout( () => currentItem.click(), 100 );

    }
  }
}


const Nav = {
  scrollOnReload: ( path ) => scrollOnReload( path ),
  setNavScroll: ( ) => setNavScroll(),
}



export default Nav;



// ((path) => {
//   let navLinks = document.querySelectorAll('.nav-item');
//   [...navLinks].forEach((item) => {
//     let aTag     = item.querySelector('a');
//     let aTagHref = aTag.href.split('/');
//     aTagHref     = aTagHref[aTagHref.length - 1];
//     path         = path.split('/').join('');
//     if ( path === 'get-a-quote' ) return;
//     if ( aTag && aTagHref === path ) {
//       aTag.style.borderBottom = '1px solid #08213D';
//     }else {
//       aTag.style.borderBottom = '0px';
//     }
//   })
// })( window.location.pathname )

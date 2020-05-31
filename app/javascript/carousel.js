const OFFSET = 20;

const increment = ( wrap ) => { wrap.scrollLeft += OFFSET; }

const decrement = ( wrap ) => { wrap.scrollLeft -= OFFSET; }

const toggleScroll = ( wrap, elem ) => {
  if ( elem.id === 'next' ) {
    increment( wrap );
  } else {
    decrement( wrap );
  }
}

const computeCardDistance = ( wrap ) => {
  let overflow = wrap.scrollWidth;
  if ( overflow ) {
    return overflow / 3;
  }
}

const _animateScroll = ( wrap, distance, elem ) => {
  if ( distance <= 0 ) {
    return;
  } 

  distance -= OFFSET;
  toggleScroll( wrap, elem );
  setTimeout( () => _animateScroll( wrap, distance, elem ), 1)
}


const animateScroll = ( wrap, distance, elem ) => {
 _animateScroll( wrap, distance, elem )
}



const initCarousel = (  ) => {
  let wrap = document.querySelector( '.endorsements-wrap-ipad' );
  let next = document.querySelector( '.carousel-next' );
  let previous = document.querySelector( '.carousel-previous' );
  if ( wrap && next ) {
    let cardDistance = computeCardDistance( wrap );
    next.onclick = () => animateScroll(wrap, cardDistance, next);
    previous.onclick = () => animateScroll(wrap, cardDistance, previous);
  }
}




export default initCarousel;

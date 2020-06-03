const OFFSET = 20;
const cardIntervals = [];
let isScrolling;

const increment = wrap  =>  wrap.scrollLeft += OFFSET; 

const decrement = wrap  =>  wrap.scrollLeft -= OFFSET;

const toggleScroll = ( wrap, elem ) => {
  if ( elem.id === 'next' ) {
    increment( wrap );
  } else if ( elem.id === 'previous' ) {
    decrement( wrap );
  }
}



const computeCardDistance = ( wrap ) => {
  let cardCount = wrap.querySelectorAll( '.endorse-card' );
  let overflow  = wrap.scrollWidth;
  if ( cardCount ) {
    let dist = overflow / cardCount.length
    return dist;
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


const handleScroll = ( wrap, next, previous, distance ) => {
  let halfCardDistance = distance / 2;
  let isFirstCard      = wrap.scrollLeft >= halfCardDistance;
  let isLastCard       = wrap.scrollWidth - wrap.scrollLeft <= distance;  
  let previousIsHidden = previous.style.display === 'none';
  let nextIsHidden     = next.style.display === 'none';

  if ( isFirstCard && previousIsHidden ) {
    previous.style.display = '';
  } else if ( !isFirstCard && !previousIsHidden ) {
    previous.style.display = 'none';
  } else if ( isLastCard && !nextIsHidden ) {
    next.style.display = 'none';
  } else if ( !isLastCard && nextIsHidden ) {
    next.style.display = '';
  }
}




const initCarousel = (  ) => {
  let wrap = document.querySelector( '.endorsements-wrap-ipad' );
  let next = document.querySelector( '.carousel-next' );
  let previous = document.querySelector( '.carousel-previous' );
  if ( wrap && next ) {
    let cardDistance = computeCardDistance( wrap );
    next.onclick = () => animateScroll( wrap, cardDistance, next );
    previous.onclick = () => animateScroll( wrap, cardDistance, previous );
    wrap.onscroll = () => handleScroll( wrap, next, previous, cardDistance );
  }
}




export default initCarousel;

const ToggleFaq = {
  set questions(e) {  this.elements.push(e); },
  get questions()  {  return this.elements;  },
  elements: [],

  toggle(elem){
    let plus     = elem.target.firstElementChild || elem.target;
    let faqCard  = elem.currentTarget;
    let question = faqCard.querySelector('.faq-a'); 
    if ( plus  && plus.id === 'plus-icon' || plus.id === 'minus-icon' ) {  
      let isActive = faqCard.classList.toggle('faq-active'); 
      question.classList.toggle('faq-q-active');
      this.toggleCardIcon(isActive, faqCard);
      // setTimeout(() => this.handleIntersection(faqCard), 75);
    }
  },
  setListener(){
    if ( this.elements ) {
      this.elements.forEach((e) => {
        e.addEventListener('click', this.toggle.bind(this));
      })
    }
  },

  handleIntersection(card) {
    card.style.height = 'auto !important';
    // return;
    // let answer, boundingAnswer, boundingCard, offSet;
    // answer         = card.querySelectorAll('.faq-a')[0];
    // boundingAnswer = answer.getBoundingClientRect()?.bottom;
    // boundingCard   = card.getBoundingClientRect()?.bottom;
    // offSet         = boundingCard - boundingAnswer; 
    // if ( offSet < -80 ) {
    //   offSet = Math.floor(-(offSet) + 165);
    //   let newHeight = offSet < 180 ? '180px' : offSet.toString() + 'px !important'
    //   card.style.cssText = "height: " + newHeight;
    // } else {
    //   card.style.cssText = '';
    // }
  },

  toggleCardIcon(active, card) {
    let plusIcon  = card.querySelector( '#plus-icon' );
    let minusIcon = card.querySelector( '#minus-icon' );
    let cWrap     = card.querySelector( '.contact-form-wrap' );
    if ( active ) {
      if ( cWrap && cWrap.style.display === 'none' ) { cWrap.style.display    = ''; }
      
      plusIcon.style.display  = 'none';
      minusIcon.style.display = '';
    }else {
      if ( cWrap && cWrap.style.display === '' ) {  cWrap.style.display    = 'none'; } 

      plusIcon.style.display = '';
      minusIcon.style.display = 'none';
    }
  }
}

function initFaq() {
  let elements = document.querySelectorAll('.faq-card');
  if ( elements ) {
    elements.forEach( e => ToggleFaq.questions = e )
  }
  ToggleFaq.setListener();
}


export default initFaq;

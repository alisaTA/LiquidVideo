const ToggleFaq = {
  set questions(e) {  this.elements.push(e); },
  get questions()  {  return this.elements;  },
  elements: [],

  toggle(elem){
    let plus     = elem.target.firstElementChild || elem.target;
    let faqCard  = elem.currentTarget;
    let question = faqCard.querySelector('.faq-a'); 
    let card     = faqCard.querySelector('.faq-card');

    if ( plus  && plus.id === 'plus-icon' || plus.id === 'minus-icon' ) {  
      let isActive = faqCard.classList.toggle('faq-active'); 
      question.classList.toggle('faq-q-active');
      question.style.display = isActive ? '' : 'none';
      this.toggleCardIcon(isActive, faqCard);
    }
  },
  setListener(){
    if ( this.elements ) {
      this.elements.forEach((e) => {
        e.addEventListener('click', this.toggle.bind(this));
      })
    }
  },

  toggleCardIcon(active, card) {
    let plusIcon  = card.querySelector( '#plus-icon' );
    let minusIcon = card.querySelector( '#minus-icon' );
    let cWrap     = card.querySelector( '.contact-form-wrap' );

    if ( active ) {      
      plusIcon.style.display  = 'none';
      minusIcon.style.display = '';
    }else {
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

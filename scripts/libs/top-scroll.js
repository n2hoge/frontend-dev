getScrolled = () => ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;

const topButton = document.getElementById( 'js-scroll-fadein' );

window.onscroll = () => ( getScrolled() > 500 ) ? topButton.classList.add( 'is-fadein' ): topButton.classList.remove( 'is-fadein' );

scrollToTop = () => {
  const scrolled = getScrolled();
  window.scrollTo( 0, Math.floor( scrolled / 2 ) );
  if ( scrolled > 0 ) {
    window.setTimeout( scrollToTop, 30 );
  }
};

topButton.onclick = () => scrollToTop();

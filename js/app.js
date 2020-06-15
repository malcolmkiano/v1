/* global $ */

function delay(fn, duration=1000){
  setTimeout(fn, duration);
}

function hideLoader(){
  delay(() => {
    $('body').addClass('loaded');
    delay(() => {
      $('body').css('overflow', 'auto');
    }, 2000);
  }, 1000);
}

function getLinkColor(){
  let postHeader = $('header.post-header');
  let linkColor = postHeader.css('background-color');
  $('body').css('--linkColor', linkColor);
}

function handleInternalNavigation(){
  $('a').on('click', e => {
    let url = $(e.currentTarget).attr('href');
    if (url.indexOf('#') !== -1){
      // navigating internally
      e.preventDefault();
      let destination = $(url).offset().top;
      $('html, body').animate({
        scrollTop: destination
      }, 1000);
    }
  });
}

function handleScroll(){
  $(window).on('scroll', () => {
    $('[data-parallax]').each( function(){
      let scrollTop = $(window).scrollTop();
      let amount = $(this).data('parallax');
      $(this).css('transform', `translateY(${amount * scrollTop}px)`);
    });
  });
}

function main(){
  hideLoader();
  getLinkColor();
  handleScroll();
  handleInternalNavigation();
}

$(main);
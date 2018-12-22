document.addEventListener('DOMContentLoaded', function(event) {

  // Grab the gallery
  var main_gallery = document.querySelector('#main-img');
  var main_gallery_parent = document.querySelector('#main-img-parent');
  var gallery = document.querySelector('.gallery');

  //  Make sure that the page has a gallery
  if(main_gallery!=null){
    main_gallery.classList.remove('invisible');
    main_gallery_parent.classList.remove('invisible');
    main_gallery.classList.add('gallery-main');
    gallery.className = 'js-gallery';

    gallery.addEventListener('click', function(event){

      if(event.target.tagName=='IMG' && event.target.id!='main-img' && event.target.tagName!='gallery'){
        // Get list of items
        var list_items = document.querySelectorAll('.js-gallery li');
        // loop to remove classes
        for (var i = 0; i < list_items.length; i++) {
          list_items[i].className = "";
        }
        main_gallery.src=event.target.src;
        event.target.parentNode.className='gallery-selected';
      }
    });
  }
});

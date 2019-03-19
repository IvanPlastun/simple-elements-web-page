$(document).ready(function() {
   $('.accordion-header').on('click', function() {
            var $this = $(this),
            contentAll = $('.accordion-content'),
            idcontent = $this.next().attr('id');
         if(!$this.hasClass('accordion-header_active')) { 
            contentAll.stop().slideUp();
            $('#'+idcontent).stop().slideDown(300);
            $('.accordion-header').removeClass('accordion-header_active');
            $this.addClass('accordion-header_active');
         } else {
            $('#'+idcontent).stop().slideUp();
            $this.removeClass('accordion-header_active');
         }
   });
});


//fa fa-caret-right
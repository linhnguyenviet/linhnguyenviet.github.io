(function($) {
  $(function() {
    $(document).on('click', '.js-navi__icon', function() {
      $(".js-header").toggleClass('is-active');
    });
    $(window).on('resize', function() {
      if($(window).width > 768) {
        $(".js-header").removeClass('is-active');
      }
    });
  });
})(jQuery);


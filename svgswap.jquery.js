(function($){
	$.svgswap = {
		els: $()
	}

	$.fn.svgswap = function(options) {
		var settings = $.extend({}, $.svgswap.defaults, options);

		// Check off of HTML5 Boilerplate's class attribute "lt-ie9" on HTML element to see if IE8- is being used/
		var checkBrowser = $('html').hasClass('lt-ie9');
	
		$.svgswap.els = $.svgswap.els.add(this);

		return this.each(function(){

			$(this)
				.on('swapres.svgswap', function(){
					if (checkBrowser === true) {
						$(this).attr('src', $(this).data('svgswap'));
					} 
				})
				.trigger('swapres.svgswap');
		})

	}
})(jQuery);
(function($){
	$.fn.tabShow=function(settings){
		if(this.length<1){return;};
           
		settings=$.extend({
			title: 'h2',
			events: 'mouseover',
			showis: 0,
			fixPos: false
		},settings);
	
		var tab_obj        = $(this),
			tab_title      = tab_obj.find('.tab-title'),
			tab_list       = tab_obj.find('.tab-list'),
			tab_title_array= tab_title.find(settings.title),
			tab_list_array = tab_list.find('.tab-info');

		// default trigger
		tab_title_array.bind(settings.events,function(){
			tabStart(tab_title_array.index(this));
		});

		var tabStart = function(num){
			var top = $(document).scrollTop();

			tab_title_array.removeClass('current')
						   .eq(num).addClass('current');
			tab_list_array.hide().eq(num).show();

			// 解决不等高产生的位移问题
			if ( settings.fixPos ) {
				$('body, html').scrollTop(top);
			}
		};

		tabStart(settings.showis)
	};
})(jQuery);
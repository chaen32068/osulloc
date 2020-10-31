(function($){
	$(function() {
		$('.tab').each(function(){
			var $tab = $(this),
					$tabMenu = $tab.find('.tab-menu'),
					$section = $tab.find('section'),
					$pic = $section.find('img'),
					sp = 1000,
					easing = 'easeOutBounce';
				
			$tabMenu.on('click', 'a', function(e){
				e.preventDefault();
				
				//현재 보여지는 메뉴를 클릭하면 반응하지 않도록
				if ($(this).hasClass('on')) {
					return;
				};
				
				$tabMenu.find('a').removeClass('on');
				$(this).addClass('on');
				$section.hide();
			});
			
			
		});
	});
})(jQuery);






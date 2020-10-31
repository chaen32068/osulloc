$(function() {
	$('#tabMenu').each(function() {
		var gnb = $(this).find('.gnb'),
				a = gnb.find('a'),
				article = $(this).find('article');
		
		gnb.on('click', 'a', function(e){
			e.preventDefault();
			
			//클릭한 a를 변수로 저장
			var $this = $(this);
			
			//선택된 링크 a는 마우스 이벤트에 반응하지 않도록
			if ($this.hasClass('on')) {
				return;
			}
			
			//모든 링크 a에 클래스를 제거하고  클릭된 링크  a 에  addClass 적용
			a.removeClass('on');
			$this.addClass('on');
			
			//모든 article 숨기고
			//클릭된  링크에 해당되는 article만 보임
			article.hide();
			$($this.attr('href')).fadeIn();
		});
		//a요소가 마치 클릭이 된 상태로 만들 때 trigger 메소드 사용
		a.eq(2).trigger('click');
	});
});









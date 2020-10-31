$(function() {
	$('.tabset').each(function() {
		//사용할 요소 분류
		var tabDiv = $(this);
		var anchors = tabDiv.find('.tabs a');
		var panelDivs = tabDiv.find('.panel');
		
		//마지막에 클릭된 a요소, 패널을 저장하기 위한 변수
		var lastAnchor;
		var lastPanel;
		
		//탭부분을 화면에 표시-브라우저에서 확인할것
		anchors.show();
		
		//처음부터 열어둔 패널
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		
		//패널을 전부 숨기고 처음 패널만 열기
		panelDivs.hide();
		lastPanel.show();
		
		//이벤트설정
		anchors.on('click', function(e) {
			//a요소의 클릭 기본 동작을 모두 비활성화
			e.preventDefault();
			
			//클릭하는 a요소와 대응되는 패널
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			//만약 같은 탭이면 클릭해도 반응이 없도록 
			if (currentAnchor.get(0) == lastAnchor.get(0)) {
				return; //실행문을 실행하지않고 종료
			}
			
			//마지막에 열린 패널 닫기
			lastPanel.slideUp(200, function() {
				//애니메이션이 끝나면 마지막으로 클릭한 탭의 on 클랙스 변경
				lastAnchor.removeClass('on');
				
				//클릭한 탭 활성화
				currentAnchor.addClass('on');
				
				//클릭한 탭과 매칭되는 패널 표시
				currentPanel.slideDown(200);
				
				//마지막으로 클릭한 패널 숨김
				lastPanel.hide();
				
				//처음 작업을 위해 a요소, panel  저장
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			})
		});
		
		
		
		
		
	});
});
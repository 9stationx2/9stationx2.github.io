     $(function(){
  function toggleAside() {
    $('aside').toggleClass('open');
    if ($('aside').hasClass('open')) {
      $('aside').stop().animate({ right: 0 }, 500, 'easeInQuad');
      $('button img').attr({ src: './image/btn_close.png.', alt: 'close' });
    } else {
      $('aside').stop().animate({ right: '-220px' }, 500, 'easeOutQuad');
      $('button img').attr({ src: './image/btn_open.png', alt: 'open' });
    }
  }

  // 버튼 클릭과 햄버거 아이콘 클릭에 모두 토글 함수 연결
  $('a.menuAll').on('click', function(e){
    e.preventDefault();
    toggleAside();
  });
});
/* eslint-disable */
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

var viewer = new Viewer(document.getElementById('swiper'),{
    url: 'src'
});
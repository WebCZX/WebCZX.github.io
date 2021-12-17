//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('music', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('music');
    audio.play();
    document.addEventListener(
      'WeixinJSBridgeReady',
      function () {
        audio.play();
      },
      false
    );
  }
  audioAutoPlay();
});
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
document.addEventListener('touchstart', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('music');
    audio.play();
  }
  audioAutoPlay();
});

// 文字闪烁  <div id="blink">文字闪烁</div?
function changeColor() {
  let color = '#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray';
  color = color.split('|');
  document.getElementById('blink').style.color =
    color[parseInt(Math.random() * color.length)];
}
setInterval('changeColor()', 1000);

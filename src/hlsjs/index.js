var Hls = window.Hls
var play = document.getElementById('play')
var btn = document.getElementById('btn')
var video = document.getElementById('video')

if (Hls.isSupported()) {
  var hls = new Hls()
  hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8')
  hls.attachMedia(video)
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
    video.play()
  })
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
  video.addEventListener('loadedmetadata', function() {
    video.play()
  })
}

function bind(el, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }

  el.addEventListener(type, function(e) {
    if (selector) {
      var target = e.target
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn.call(el, e)
    }
  })
}

bind(btn, 'click', function(e) {
  if (video.paused) {
    video.play()
    console.log('play')
  } else {
    video.pause()
    console.log('paused')
  }
})

bind(video, 'play', function(e) {
  btn.className = 'btn play'
})

bind(video,'click',function(e){
  if(video.paused){
    video.play()
  }else{
    video.pause()
    btn.className = 'btn'
  }
})

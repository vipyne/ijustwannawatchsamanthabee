window.onload = function() {
  var video = document.createElement('video');

  document.body.appendChild(video);
  video.style.position = 'absolute';
  video.style.top = '0';
  video.style.zIndex = '10000000000';
  video.style.width = '100%';
  video.controls = true;

  var urls = [];
  var clips = document.getElementsByClassName('play-clip');

  for (var i = 0; i < clips.length; i++) {
    urls.push(clips[i].dataset.vidUrl);
  }

  video.src = urls[0];
  video.autoplay = true;
  var nextVidIndex = 1;

  video.addEventListener("ended", function() {
    video.src = urls[nextVidIndex];
    video.autoPlay = true;
    nextVidIndex++;
  }, true);
};

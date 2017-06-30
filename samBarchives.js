window.onload = function() {
  var latestEp = document.body.getElementsByClassName('slider')[0].dataset.epNum;
  window.location.href = 'http://samanthabee.com/episode/' + latestEp;
};

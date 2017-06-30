chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: "http://samanthabee.com/archives/"});
});
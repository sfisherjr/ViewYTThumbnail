/**
  When our context menu item is clicked this will fire and
  open the link to the thumbnail via youtubes service.
*/
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info && info.menuItemId == "vti-1000") {
    var url = new URL(info.linkUrl);

    let v = url.searchParams.get("v");
    window.open("http://i3.ytimg.com/vi/" + v + "/maxresdefault.jpg", "_blank");
  }
});

/**
  When we receive our create or delete message either create
  the context menu item or delete it.
*/
chrome.extension.onMessage.addListener(function(message) {
  console.log(message);
  if (message.cmd == "create_menu") {
    console.log("creating");
    var cmOps = {
      id:"vti-1000",
      title: "View Thumbnail Image",
      contexts: ["link"]
    };

    chrome.contextMenus.create(cmOps, function() {
      if (chrome.runtime.lastError) {
        console.log('error found: ' + chrome.runtime.lastError.message);
      }
    });
  }
  else if (message.cmd == "delete_menu") {
    chrome.contextMenus.removeAll();
  }
});
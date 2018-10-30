/**
  Sends a message to create or delete the context menu item
  when the user right clicks on a youtube video.
*/
document.addEventListener("mousedown", function(event) {
  if (event.path[0].id == "thumbnail" || event.path[0].id == "play") {
    chrome.extension.sendMessage({cmd: "create_menu"});
  }
  else {
    chrome.extension.sendMessage({cmd: "delete_menu"});
  }
});
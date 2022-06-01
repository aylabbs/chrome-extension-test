chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // check for a URL in the changeInfo parameter (url is only added when it is changed)
  if (changeInfo.url) {
      
      // calls the inject function
      console.log(tabId, changeInfo.url);

  }
});

// chrome.webRequest.onCompleted.addListener(
//   function(details) { 
//     console.log("onCompleted", details)
//     return {cancel: false}; },
//   {urls: ["*://*/*"]},
// );
// chrome.webRequest.onResponseStarted.addListener(
//   function(details) { 
//     console.log("onResponseStarted", details)
//     return {cancel: false}; },
//   {urls: ["*://*/*"]},
// );
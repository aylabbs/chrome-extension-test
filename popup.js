const changeHTML = (newText) => {
  document.querySelectorAll("#root")[0].innerHTML =  newText
}
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    var currentTab = tabs[0]; // there will be only one in this array
    console.log(currentTab); // also has properties like currentTab.id
    changeHTML(currentTab.url)
  })
});
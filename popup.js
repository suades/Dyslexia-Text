document.addEventListener('DOMContentLoaded', function() {
    var fontSelect = document.getElementById('fontSelect');
  
    fontSelect.addEventListener('change', function() {
      var font = fontSelect.value;
      if (font === 'OpenDyslexic') {
        chrome.tabs.insertCSS({ file: 'opendyslexic.css' });
      } else {
        chrome.tabs.executeScript({ code: 'document.body.style.fontFamily = "' + font + '";' });
      }
    });
  });
  
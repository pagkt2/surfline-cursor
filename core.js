const MOUSE_VISITED_CLASSNAME = 'crx_mouse_over_waves';

// const imgURL = chrome.runtime.getURL("images/surfer-cursor-32px.gif");

document.addEventListener('mousemove', function (e) {
  const srcElement = e.srcElement
  if (srcElement.className === 'jw-video jw-reset' && srcElement.nodeName === 'VIDEO') {
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
    // document.getElementsByClassName(MOUSE_VISITED_CLASSNAME).src = imgURL
  }
})
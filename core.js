const MOUSE_VISITED_CLASSNAME = 'crx_mouse_over_waves';

document.addEventListener('mousemove', function (e) {
  const srcElement = e.srcElement
  if (srcElement.className === 'jw-video jw-reset' && srcElement.nodeName === 'VIDEO') {
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
  }
})
const MOUSE_VISITED_CLASSNAME = 'crx_mouse_over_waves';

const imgURL = chrome.runtime.getURL("images/surfer-cursor-32px.cur");

document.addEventListener('mousemove', () => {
  const waves = document.getElementsByClassName('jw-video jw-reset')
  if (waves.length){
    for (const wave of waves) {
      if (!wave.style.cursor) {
        wave.style.cursor = `url(${imgURL}), progress`
      }
    }
  }
})
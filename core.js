const lastPoint = {x: null, y: null}
const imgURLRight = chrome.runtime.getURL("images/surfer-cursor-32px-right.cur");
const imgURLLeft = chrome.runtime.getURL("images/surfer-cursor-32px-left.cur");

document.addEventListener('mousemove', (e) => {

  const leftOrRight = (
    e.clientX > lastPoint.x ? 'right'
    : e.clientX < lastPoint.x ? 'left'
    : 'none'
  )

  const waves = document.getElementsByClassName('jw-video jw-reset')
  if (waves.length){
    for (const wave of waves) {
      if (leftOrRight === 'right' && wave.style.cursor !== `url(${imgURLRight}), progress`) {
        wave.style.cursor = `url(${imgURLRight}), progress`
      }
      if (leftOrRight === 'left' && wave.style.cursor !== `url(${imgURLLeft}), progress`) {
        wave.style.cursor = `url(${imgURLLeft}), progress`
      }
    }
  }

  lastPoint.x = e.clientX
  lastPoint.y = e.clientY


})
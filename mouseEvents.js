const getCursorPosition = (canvas, event) => {
    const x = event.offsetX
    const y = event.offsetY
    console.log(x, y)
  }

function setupMouseClickListener(canvas) {
    canvas.addEventListener('mousedown', (e) => {
        getCursorPosition(canvas, e)
        })
}


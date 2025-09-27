const insertDiv = document.querySelector('.insert')

window.addEventListener('keydown', (event) => {
  insertDiv.innerHTML = `
    <div class="key">
      <p>event.key</p>
      ${event.key === ' ' ? 'Space' : event.key}
    </div>
    <div class="key">
      <p>event.code</p>
      ${event.code}
    </div>
    <div class="key">
      <p>event.keyCode</p>
      ${event.keyCode}
    </div>
  `
})

const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav')
  circle.classList.add('show-nav')
})

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav')
    circle.classList.remove('show-nav')

})

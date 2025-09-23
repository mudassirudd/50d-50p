const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
  const triggerLine = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    
    if (boxTop < triggerLine) {
      box.classList.add('show')
    }
    if (boxTop > triggerLine) {
      box.classList.remove('show')
    }
  })
}

window.addEventListener('scroll', checkBoxes)
checkBoxes()
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highlightCups(idx)
  })
})

function highlightCups(idx) {
  // toggle logic
  if (idx === smallCups.length - 1 && smallCups[idx].classList.contains('full'))
    idx--
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  )
    idx--
  // upto logic
  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

// bigcup

function updateBigCup() {
  const fullCups = document.querySelectorAll('.full').length
  const totalCups = smallCups.length

  if (fullCups == 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
    liters.innerText = '0L'
  } else {
    liters.innerText = `${(2000 - 250 * fullCups) / 1000}L`
    remained.style.visibility = 'visible'
  }
}

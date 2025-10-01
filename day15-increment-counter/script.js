const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounters = () => {
    const target = Number(counter.getAttribute('data-target'))
    const currentNumber = Number(counter.innerText)
    const increment = target / 200

    if (currentNumber < target) {
      counter.innerText = Math.ceil(currentNumber + increment)
      setTimeout(updateCounters, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounters()
})

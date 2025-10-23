const panel = document.getElementById('panel')
const ratingsDiv = document.getElementById('ratings')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('btn')

let selectedRating = 'Satisfied'

ratingsDiv.addEventListener('click', (e) => {
  //img click
  if (
    e.target.parentElement.classList.contains('rating') &&
    e.target.nextElementSibling
  ) {
    removeActive()
    e.target.parentElement.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerText
  } else if (
    e.target.parentElement.classList.contains('rating') &&
    e.target.previousElementSibling?.tagName === 'IMG'
  ) {
    removeActive()
    selectedRating = e.target.innerText
    e.target.parentElement.classList.add('active')
  }
  // console.log(selectedRating)
})

function removeActive() {
  ratings.forEach((ratingbox) => {
    ratingbox.classList.remove('active')
  })
}

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `<h3>How satisfied are you with our<br />
                      Customer Support Performance?
                  </h3>
                  <i class='fas fa-heart'></i><br>
                  <strong>Thank You!</strong> <br> <strong>Feedback: ${selectedRating}</strong> <p>We'll use your feedback to improve our customer support</p>
`
})

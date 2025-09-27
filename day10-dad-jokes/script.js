const jokeDiv = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', makeJoke)
makeJoke()
async function makeJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await res.json()

  jokeDiv.innerHTML = data.joke
}

// USING .then
// function makeJoke() {
//   fetch('https://icanhazdadjoke.com', {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeDiv.innerText = data.joke
//     })
// }

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const btnsDiv = document.querySelector('.buttons')

sounds.forEach((sound) => {
  const btn = document.createElement('button')

  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  btnsDiv.appendChild(btn)
})

const stopSongs = () => {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause()
    document.getElementById(sound).currentTime = 0
  })
}

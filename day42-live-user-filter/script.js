const filter = document.getElementById('input')
const resultDiv = document.getElementById('result')
const listItems = []

filter.addEventListener('input', (e) => filterData(e.target.value))

getData()

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')
  const { results } = await res.json()

  console.log(results)
  resultDiv.innerHTML = ''

  results.forEach((user) => {
    let liEle = document.createElement('li')
    //push in array
    listItems.push(liEle)
    //render
    liEle.innerHTML = `
    <img
    src="${user.picture.medium}"
    alt="user-image"
    />
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city},${user.location.country}</p>
    </div>
    `
    resultDiv.appendChild(liEle)
    // console.log(listItems)
  })
}

// toggle hide class based on textcontent of each user
function filterData(searchTerm) {
  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase()
    if (text.includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

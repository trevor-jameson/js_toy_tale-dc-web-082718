const adapter = new Adapter('http://localhost:3000')
const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const toyForm = document.querySelector('.add-toy-form')
let addToy = false

// YOUR CODE HERE

function init() {
  adapter.getAllToys()
    .then(res => res.json())
    .then(toys => makeAllToyCards(toys))
}

function makeAllToyCards(toys) {
  toys.forEach(toy => makeSingleToyCard(toy))
}

function makeSingleToyCard(toy) {
    const toyCard = document.createElement('div')
    toyCard.classList.add("card")

    const toyName = document.createElement("h2")
    toyName.innerText = toy.name
    toyCard.append(toyName)

    const toyImg = document.createElement("img")
    toyImg.src = toy.image
    toyImg.classList.add('toy-avatar')
    toyCard.append(toyImg)

    const toyLikes = document.createElement('p');
    toyLikes.innerText = `Likes: ${toy.likes}`
    toyCard.append(toyLikes)

    const toyLikeButton = document.createElement('button')
    toyLikeButton.innerText = 'Like <3'
    toyLikeButton.classList.add('like-btn')
    toyCard.append(toyLikeButton)

    toyCollection.appendChild(toyCard)
}



addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainer.style.display = 'none'
  }
})


toyForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const toyName = e.target.elements.name.value
  const toyImage = e.target.elements.image.value
  adapter.postNewToy({name: toyName, image: toyImage, likes: 0})
    .then(res => res.json())
    .then(toy => makeSingleToyCard(toy))
})

// OR HERE!
init()
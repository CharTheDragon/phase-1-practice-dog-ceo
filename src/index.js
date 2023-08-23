console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"

let breeds = []

function loadDogImage(dogUrl){
    let image = document.createElement('img')
    image.className = 'image'
    image.src = `${dogUrl}`
    console.log(image.src)
    document.querySelector('#dog-image-container').append(image)
}

function selectBreeds(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
}

function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed => listBreeds(breed))
}

function removeChildren(element){
    let child = element.lastElementChild
    while(child){
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function addBreedSelectListener(){
    let breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', function(e){
        selectBreeds(e.target.value)
    })
}

function listBreeds(content){
    let listItem = document.createElement('li')
    listItem.innerText = content
    listItem.id = listItem.innerText
    //console.log(listItem.id)
    listItem.addEventListener('click',(e) => {
        e.target.style.color = 'red'
    })
    document.querySelector('#dog-breeds').append(listItem)
    console.log(listItem)
}

function getDogs(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(imageData => imageData.message.forEach(e => loadDogImage(e)
))}

getDogs()

addEventListener('DOMContentLoaded', (e) =>{
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(breedData => {
        Object.entries(breedData.message).forEach(e => listBreeds(e),
        breeds = Object.keys(breedData.message),
        updateBreedList(breeds),
        addBreedSelectListener()
)})
})

//
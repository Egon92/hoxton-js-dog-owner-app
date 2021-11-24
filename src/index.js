console.log(dogs);


/*- You'll find a variable called data in the console.log. 
    That's your list of dogs
- Render the top list of dogs using the list item template 
    you'll find on the HTML file
- Each list item should be clickable. When you click on an item, 
    the selected dog should display on the main card
- The main card should contain all the information 
    from the selected dog. Follow the template for the main card 
    that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles 
    for the selected dog between good dog/ bad dog*/



// WRITE YOUR CODE BELOW!



const dogsList = document.querySelector(`.dogs-list`)


for(const dog of dogs){
    const dogsListItem = document.createElement(`li`)
    dogsListItem.setAttribute(`class`,`dogs-list__button`)
    dogsListItem.textContent = dog.name
    dogsList.append(dogsListItem)
}

function createDogCard (dog){

const mainDogCard = document.querySelector(`.main__dog-section`)
const dogName = document.createElement(`h2`)
    dogName.textContent = dog.name
const dogImg = document.createElement(`img`)
    dogImg.src = dog.image
const dogAttributes = document.createElement(`div`)
dogAttributes.setAttribute(`class`,`main__dog-section__desc`)


const h3El = document.createElement(`h3`)
    h3El.textContent= `Bio`
const dogBio = document.createElement(`p`)
    dogBio.textContent = dog.bio

dogAttributes.append(h3El, dogBio)

const isGoodDog = document.createElement(`p`)
    isGoodDog.textContent =  `Is naughty?`
    if(dog.isGoodDog){
        isGoodDog.textContent =  `Is naughty? No!`
        } else isGoodDog.textContent =  `Is naughty? Yes!`


const dogButton = document.createElement(`button`)
    dogButton.setAttribute(`class`,`main__dog-section__btn`)
    
    if(dog.isGoodDog){
    dogButton.textContent=`Bad dog`
    } else dogButton.textContent=`Good dog`


    mainDogCard.append(dogName, dogImg, dogAttributes, isGoodDog, dogButton)

    return mainDogCard

}

const mainDogCard = document.querySelector(`.main__dog-section`)
const main = document.querySelector(`.main`)

const dogsListButtons = document.querySelectorAll(`.dogs-list__button`)

for (let i = 0; i < dogsListButtons.length; i++) {
    dogsListButtons[i].addEventListener('click', () => {
        while (mainDogCard.firstChild)(
            mainDogCard.removeChild(mainDogCard.firstChild)
        )
        main.append(createDogCard(dogs[i - 1]))
            console.log(dogsListButtons)
    })
}


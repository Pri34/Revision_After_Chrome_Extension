// //CHALLENGE 1


// // SETTING THE STAGE
// let player = "Per"
// let opponent = "Nick"
// let game = "AmazingFighter"
// const points = 0
// const hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(player + " got " + points + " points and won the " + game + " game!")
// } else {
//     console.log("The winner is " + opponent + "! " + player + " lost the game")
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes

// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log
//     (
//         `${player} got ${points} points and won the ${game} game!`
//     )
// } 
// else {
//     console.log
//     (
//         `The winner is ${opponent}! ${player} lost the game`
//     )
// }



// //CHALLENGE 2


// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function print(array){
//     for(let i=0;i<array.length;i++){
//         console.log(array[i])   
//     }
// }

// print(myCourses)


// //CHALLENGE 3


// // Save a value to localStorage
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out


// // localStorage.setItem("Prisha","hello")

// console.log(localStorage.getItem("Prisha"))


// //CHALLENGE 4


// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)

// const buttonEl = document.getElementById("button")

// buttonEl.addEventListener("click",function(){
//     console.log(data[0].score)
// })



// //CHALLENGE 5


// // The generateSentence(desc, arr) takes two parameterer: a description and an array.
// // It should return a string based upon the description and array.

// // Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// // it should return the string: "The 3 largest countries are China, India, USA"

// // Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// // "The 2 best fruits are Apples, Bananas"

// // Use both a for loop and a template string to solve the challenge

// function generateSentence(desc,arr) {
//     sentence=`The ${arr.length} ${desc} are `
//     for(let i=0;i<arr.length;i++){
//         sentence += arr[i]
//         if(i<arr.length-1){
//             sentence += ", "
//         }
//     }
//     console.log(sentence)
// }

// generateSentence("Largest Contries",["China","India","USA"])


//CHALLENGE 6


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "pexels-olly-837358.jpg",
    "pexels-olly-837358.jpg",
    "pexels-olly-837358.jpg"
]

const containerEl = document.getElementById("container")
let imgs1 =  ""

function render(a){
    for(let i=0;i<a.length;i++){
      imgs1 +=  `
            <img alt="Img of people" class="team-img" src="${a[i]}">
        `
    }
    containerEl.innerHTML = imgs1
}

render(imgs)
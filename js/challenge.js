
// html elements
let intervalId  
let count = 0

const counter = document.getElementById("counter")
const addOne = document.getElementById("plus")
const minusOne = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const comments = document.getElementById("comment-form")

//automated counter (inner code with adjustments from Ada)

document.addEventListener("DOMContentLoaded", (e) => {
    intervalId = setInterval(() => {
        count++; // Increment the count variable
        counter.textContent = count; // Update the textContent of the counter element
      }, 1000);
    });

// manual counters 

addOne.addEventListener("click", (e) => {
    counter.textContent++
})

minusOne.addEventListener("click", (e) => {
    counter.textContent--
})

//likes list (found and adapted code from the web)

heart.addEventListener("click", (e) => {
    const likeList = document.createElement("ul")
    const likeMessage = document.createTextNode(`• ${counter.textContent} has been liked.`)
    likeList.appendChild(likeMessage)
    const likes = document.querySelector(".likes")
    likes.appendChild(likeList)
})

// Leave comments on my gameplay such as: "Wow, what a fun game this is."

comments.addEventListener("submit", (e) => {
    e.preventDefault()
    const commentLog = document.createElement("ul")
    document.getElementById("list").append(commentLog)
    const input = document.querySelector("input#comment-input");
    commentLog.append(input.value)
    console.log(document.getElementById("list"))
})

// pause counter $$$  
// and switch the label on the button from "pause" to "resume" $$$
// disable all buttons except the pause button $$$
// Click the "resume" button to restart the counter and re-enable the buttons.

pause.addEventListener("click", (e) => {
    console.log(pause.textContent == "pause")
    if (pause.textContent === "pause"){ 
        // this is for the pause
        clearInterval(intervalId) 
        pause.textContent = "resume"
        addOne.disabled = true
        minusOne.disabled = true
        heart.disabled = true 
        document.getElementById("submit").disabled = true 
    } else {
        // this is for the resume
        console.log(count)
        intervalId = setInterval(() => {
            count++; // Increment the count variable
            counter.textContent = count; // Update the textContent of the counter element
          }, 1000);
        pause.textContent = "pause"
        addOne.disabled = false
        minusOne.disabled = false
        heart.disabled = false
        document.getElementById("submit").disabled = false
    }
})


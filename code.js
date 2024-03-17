const btn = document.querySelector(".button")
const story = document.querySelector(".story")
const input = document.querySelector(".input")


function click(){
    story.value +=  `- ${input.value}\n`
}



btn.addEventListener('click', click)
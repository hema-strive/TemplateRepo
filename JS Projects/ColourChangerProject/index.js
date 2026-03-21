const btn = document.getElementById("changeColourBtn")
const box = document.getElementById("Box")
const text = document.getElementById("text")

function colourPalette(){
    const colour =["Red", "blue", "Grren","Yellow"]
    const randomIndex = Math.floor(Math.random() * colour.length)
    return colour[randomIndex]
}

btn.addEventListener("click", () =>{
    const nColour = colourPalette()
    box.style.backgroundColor = nColour
    text.style.color = nColour
})
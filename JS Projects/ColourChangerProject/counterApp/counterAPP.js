const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")
const resetBtn = document.getElementById("resetBtn")
const counterValue = document.getElementById("counterValue")

let count = 0

function updateCount() {
    counterValue.textContent = count 
    if(count<0){
        counterValue.style.color = "red"        
    }else if( count> 0) {
        counterValue.style.color = "green"
    }else{
        counterValue.style.color = "grey"
    }
}

incrementBtn.addEventListener("click" , ()=>{
    count ++
    updateCount()
})

decrementBtn.addEventListener("click" , ()=>{
    count --
   updateCount()
})

resetBtn.addEventListener("click" , ()=>{
    count = 0
    updateCount()
})

updateCount();
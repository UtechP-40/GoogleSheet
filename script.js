
//global variable defination
let container = document.querySelector(".container");
let alpha = document.querySelector(".alpha");
//head
for(let i = 0;i<=26;i++){
    let headerColumn = document.createElement("div");
    headerColumn.className = "cell head"
    headerColumn.style.fontWeight = "1000"
    headerColumn.style.fontSize = "1rem"
    if(i!=0){;
    headerColumn.innerText = String.fromCharCode(64+i)
    
}
    alpha.append(headerColumn)

}
//cells
for(let i = 1;i <=20;i++){
    let row =  document.createElement("div");
    row.className = "row"
    row.style.fontWeight = "1000"
    row.style.fontSize = "1rem"
    row.innerText = i
    row.className = "cell head"
    container.append(row)
    for(let j = 1;j <=26;j++){
        let column =  document.createElement("div");
        column.className = "cell"
    column.contentEditable = true
       container.append(column)
    //    column.addEventListener("focus",focused)
    //     column.addEventListener("blur",blured)
        column.addEventListener("click",selected)
    }
}
//
function focused(e){
    e.target.classList.add("selected")
}
function blured(e){
   
    e.target.classList.remove("selected")
    
}

//selected
let selectedCells = new Set()
function selected(e) {
    if(!e.metaKey && !e.ctrlKey){
        // selectedCells.add(e.target);
        for(let t of selectedCells){
            if(t!=e.target){
                t.classList.remove("selected")
            }
            
        }
        selectedCells.clear()
        console.log("clear")
        
    } 

        if(selectedCells.has(e.target)){
            selectedCells.delete(e.target);
            e.target.classList.remove("selected")
        }
        else{
            e.target.classList.add("selected")
            selectedCells.add(e.target)
        }
       
        
    // if(!e.)
    console.log(e.ctrlKey)
}

  

let fontSelect = document.querySelector("select")
// console.log(fontSelect)
fontSelect.addEventListener("change",(e)=>{
    for (let t of selectedCells) {
        t.style.fontFamily = e.target.value
        console.log(fontSelect)
    }
})

//color selection for font
let backgroundColor = document.getElementById("colorfieldBackground");
// console.log(fontColor.value)
backgroundColor.addEventListener("change",(e)=>{
    for (let t of selectedCells) {
        t.style.backgroundColor = backgroundColor.value
        // console.log(fontSelect)
    }
})

let borderColor = document.getElementById("borderColor");
// console.log(fontColor.value)
borderColor.addEventListener("change",(e)=>{
    for (let t of selectedCells) {
        t.style.borderColor = borderColor.value
        // console.log(fontSelect)
    }
})


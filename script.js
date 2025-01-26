/*take containers and buttons*/
const imgContainer = document.querySelector(".img-container")
const btnE1 = document.querySelector(".btn")


/*An enent on button*/
btnE1.addEventListener("click", ()=>{ /*Event takes cal back function*/
/*call a function that updates images*/
console.log(" button clicked")
imgNum = 6 
updateImg();

})

function updateImg(){
    
    for(let i = 0; i < imgNum; i++){
    /*there is an image */
    const newImg = document.createElement("img")
    /*A sourse of that image ;floor not floar*/
    newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}` /*we using templateLiterals bcz using stringInterpolatio for random numbers*/
    /*Math.random() uses floar value multply by 1000*/
   
    imgContainer.appendChild(newImg)/*add element to container*/
}
}



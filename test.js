function bigSize(){
    document.querySelector("div").classList.add("big");
    document.querySelector("div").classList.remove("small");
    
}
function smallSize(){
    document.querySelector("div").classList.add("small");
    document.querySelector("div").classList.remove("big");
    
}

document.querySelector(".big-size").onclick = bigSize;
document.querySelector(".small-size").onclick = smallSize;
let line = document.querySelector('.line')

window.onscroll=()=>{
    let pos=window.scrollY-800;
    console.log(pos)
    line.style.left=`${pos}px`
    if(pos <=391.5999755859375 || pos>=939.5999755859375){
        line.classList.add("hide")
    }
    else{
        line.classList.remove("hide")

    }
}
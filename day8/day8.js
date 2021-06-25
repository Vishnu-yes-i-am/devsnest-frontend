var boxes=document.querySelectorAll('.pixel');
boxes.forEach( box => { box.addEventListener('click',()=>{
    box.classList.toggle('change');
    console.log(box.classList);
})
    
});
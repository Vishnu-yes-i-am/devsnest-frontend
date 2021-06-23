el1=document.getElementById("booked");
el2=document.getElementById("left");
var seats=document.querySelectorAll('.seat');
seats.forEach(seat => {
    seat.addEventListener('click',() => {
    if(seat.classList.contains("seat")){
        seat.classList.remove("seat");
        seat.classList.add("seat2");
        el1.innerHTML=parseInt(el1.innerHTML)+1;
        el2.innerHTML=parseInt(el2.innerHTML)-1;
        }
        else{
            seat.classList.remove("seat2");
            seat.classList.add("seat");  
            el2.innerHTML=parseInt(el2.innerHTML)+1;
            el1.innerHTML=parseInt(el1.innerHTML)-1;
        }
}
);
});

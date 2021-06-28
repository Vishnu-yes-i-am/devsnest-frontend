var questions=['Q1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis unde optio tempora esse commodi! Beatae quas eum dicta','Q2. velit dolores ipsa libero? Ab accusantium labore, voluptate quam, beatae cum laudantium asperiores omnis ipsam facere voluptates','Q3. atque reprehenderit tenetur impedit, voluptatem quisquam illum sapiente! Nulla minus obcaecati quo','Q4. reiciendis sapiente tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi accusamus inventore repellendus blanditiis fugiat minima cupiditate voluptatum doloremque voluptatibus ipsa quis, illum rerum explicabo','Q5. ex dolor ea velit commodi ab officia alias vero saepe, laborum expedita? Harum, odit sunt. Recusandae enim doloribus nemo nihil officia modi voluptates debitis sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis nam corrupti repellendus hic laborum dolorum, delectus facilis deleniti architecto, labore quibusdam','Q6.provident quam odio, consequuntur omnis. Quibusdam mollitia ipsa distinctio numquam consequuntur nobis accusantium','Q7. sint, excepturi, cupiditate sit officia, natus magnam qui rerum sunt quaerat error tempora architecto. Dignissimos perspiciatis voluptates numquam consectetur ipsa minima beatae asperiores harum cupiditate facilis velit quia quam earum dolorem maxime reiciendis, nesciunt alias accusamus laudantium atque est, adipisci aliquam. Blanditiis, deserunt dolorum? Esse impedit fugit nihil quae sunt vitae porro voluptatibus perspiciatis inventore modi error ex ea','Q8. magnam excepturi tempora numquam, possimus ab at beatae? Tempore natus fugit quam exercitationem adipisci voluptatem. Vel officia deserunt voluptatum eveniet corrupti unde minima eligendi magnam. Perferendis cumque, molestias beatae inventore rerum tempora dignissimos provident assumenda officiis officia consectetur, eius adipisci','Q9. ullam quaerat eum! Ut, et cumque! Molestias quis odio voluptates dicta quod mollitia dolor, nihil rem, maxime, voluptate nemo! Magnam ullam quidem doloremque, recusandae rerum id in reiciendis voluptas natus veritatis tempore hic suscipit commodi architecto obcaecati. Reprehenderit error corporis nesciunt eligendi iusto, natus earum. Vitae alias dolor earum quos illum, blanditiis sed eaque placeat soluta aliquid mollitia architecto reiciendis','Q10. sapiente? Doloremque praesentium magnam quis a magni nostrum corrupti consectetur aperiam doloribus neque explicabo quam, placeat maiores tenetur voluptatibus vel mollitia vero facere nam quae reprehenderit. Atque nisi sapiente eius animi tempora non sint adipisci pariatur? Saepe quisquam quas eos esse facere eligendi at corporis error magni cupiditate, eius sed corrupti amet provident. Perferendis, id nesciunt.'];
var saved=['','','','','','','','','',''];
var op = {option1:'sbdkjfh',option2:'sdfvjhsda',option3:'hasdvdsha',option4:'dasvhsadvghad',correct:'option2'};    
var options=document.querySelectorAll('.options');
var i=0;
document.querySelector('.ques').innerHTML=questions[i];
var next =document.querySelectorAll('.next');
var previous =document.querySelectorAll('.previous');
next.forEach( click => {click.addEventListener('click',()=>{
    if(i<questions.length-1){
    if(saved[i]!=''){
    document.getElementById(saved[i]).querySelector('.optionno').classList.toggle('clicked');}
    i+=1;
    if(saved[i]!=''){
    document.getElementById(saved[i]).querySelector('.optionno').classList.toggle('clicked');
    }
    document.querySelector('.ques').innerHTML=questions[i];   
    if(i==questions.length-1){
        document.querySelector('.next').innerHTML="Submit";
}}
else{
    alert("your responses are successfully submitted");
    window.location.reload();
    
}
})});
previous.forEach( click => {click.addEventListener('click',()=>{
    if(i>0){
        if(saved[i]!=''){
            document.getElementById(saved[i]).querySelector('.optionno').classList.toggle('clicked');}
        i-=1;
        if(saved[i]!=''){
            document.getElementById(saved[i]).querySelector('.optionno').classList.toggle('clicked');
            }
        document.querySelector('.ques').innerHTML=questions[i];
    }
})});
var j=1;

options.forEach(option => {
    option.querySelector('.optionvalue').innerHTML=op['option'+j];
    j+=1;
    option.addEventListener('click',()=>{
if (option.id!=saved[i]){ 
    // console.log(getans);
    if(saved[i]!=''){
        document.getElementById(saved[i]).querySelector('.optionno').classList.toggle('clicked');
        option.querySelector('.optionno').classList.toggle('clicked');
    }
    else{
        option.querySelector('.optionno').classList.toggle('clicked'); 
    }
    saved[i]=option.id;
    }
    else{
    saved[i]='';
option.querySelector('.optionno').classList.toggle('clicked');}
})
    
});

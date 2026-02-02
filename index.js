/*creating button click show hidden navbar**/
const togglebtn=document.querySelector(".togglebtn");
const nav=document.querySelector(".navlinks");
const links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})
const typed= new Typed(".input",{
    strings:["Computer Scientist"],
    typeSpeed:70,
    backSpeed:80,
    loop:true 
} )



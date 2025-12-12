let bouton =document.getElementById ("dark_mode_btn");
bouton.addEventListener ("click", function() 
{
    document.body.classList.toggle("dark-mode")
})








let burger=document.getElementById("burger")

let liste= document.getElementById ("liste")

burger.addEventListener("click", function (){
    liste.classList.toggle("show")})

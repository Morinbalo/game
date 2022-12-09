let character =document.querySelector('.char')
let blo =document.querySelector('.block')
let game=document.querySelector('.game')
// character.addEventListener('click',jump)
window.addEventListener('keypress',jump)
function jump (){
    character.classList.add('animate')
    setTimeout(function (){
        character.classList.remove('animate')

     },500)

   }

// removes the class from the html
//  document so it does'nt jump continously
let checkdead =setInterval(function (){
let chractertop=parseInt(window.getComputedStyle(character).getPropertyValue('top'))
let blockcount=parseInt(window.getComputedStyle(blo).getPropertyValue('left'))

 if ((blockcount<20 )&& (chractertop >110 )){
     blo.style.display='none'
     blo.style.left='480px'
    alert('you failed try again')
  
 }
 
},1)






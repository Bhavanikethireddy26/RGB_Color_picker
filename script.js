// const red=document.querySelector("#red");
// const green=document.querySelector("#green");
// const blue=document.querySelector("#blue");
// const container1=document.querySelector(".container")

// let r=0;
// let g=0;
// let b=0;
// red.addEventListener("keyup", (e)=>{
//     r=red.value;
//     if(!r){
//         r=0;
//     }
//     container1.style.backgroundColor=`rgb(${r},${g},${b})`
// })
// green.addEventListener("keyup", (e)=>{
//     g=green.value;
//     if(!g){
//         g=0;
//     }
//     container1.style.backgroundColor=`rgb(${r},${g},${b})`
// })
// blue.addEventListener("keyup", (e)=>{
//     b=blue.value;
//     if(!b){
//         b=0;
//     }
//     container1.style.backgroundColor=`rgb(${r},${g},${b})`
// })

function myColour() { 
    const red=document.querySelector("#red");
    const green=document.querySelector("#green");
    const blue=document.querySelector("#blue");
    const container1=document.querySelector("#container");
    const redlabel=document.querySelector("#red-label");
    const greenlabel=document.querySelector("#green-label");
    const bluelabel=document.querySelector("#blue-label");
  
    let r=red.value;
    let g=green.value;
    let b=blue.value;
    let colour='rgb('+r+','+g+','+b+')';
    container1.style.backgroundColor=colour;
    redlabel.innerHTML=`${r}`;
    greenlabel.innerHTML=`${g}`;
    bluelabel.innerHTML=`${b}`;
    
  } 
  red.addEventListener('input', myColour);
  green.addEventListener('input', myColour);
  blue.addEventListener('input', myColour);
  
    // Get the value of red color 
    // var red = document.getElementById('red').value; 
  
    // Get the value of green color 
    // var green = document.getElementById('green').value; 
  
    // Get the value of blue color 
    // var blue = document.getElementById('blue').value; 
  
    // rgb() function is used to create the color 
    // from red, green and blue values 
    // var colour = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
  
    // Change background colour with the  
    // color obtained by rgb function 
    // document.body.style.backgroundColor = colour;   
//     redrange.textContent=`Red:  ${r}`;
//     greenrange.textContent=`Green:  ${g}`;
//     bluerange.textContent=`Blue:  ${b}`;
  
// } 

// red.addEventListener('input', myColour);
// green.addEventListener('input', myColour);
// blue.addEventListener('input', myColour);

// On changing red range slider myColour() 
// function is called   
// document.getElementById('red') 
//     .addEventListener('input', myColour); 
  
// On changing green range slider myColour() 
// function is called 
// document.getElementById('green') 
//     .addEventListener('input', myColour); 
  
// On changing blue range slider myColour() 
// function is called 
// document.getElementById('blue') 
//     .addEventListener('input', myColour); 
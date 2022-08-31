let container = document.querySelector('.container');
let pix =  document.createElement('div'); 
let randomColor =false ;
let chosenColor = "red";
let  size1 = 16;
let pixelSize =25*(16/size1)
createGrid(16);

function resize() {
  size1 = prompt("Size?");
  pixelSize =25*(16/size1)
    createGrid(size1);
    
}

function createGrid(size) {
    container.innerHTML='';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pix = document.createElement('div');
            pix.classList.add("pixel");
            pix.style.cssText='background-color: white; ';
            pix.style.width = pixelSize +'px';
            pix.style.height = pixelSize + 'px';
           
           
            container.appendChild(pix);
            
            
        }
     container.innerHTML=container.innerHTML+'<break></break>';
     
    }
    document.querySelector('#colorWell').addEventListener("change",
    (e)=>{ chosenColor= e.target.value
    randomColor = false;
    });
 
    let a =false;
    let b = false;
    document.querySelectorAll(".pixel").forEach
    (   div => div.addEventListener("mousedown",function(e){a=true; if(a&&b)coloring(e)}))
    
    document.querySelectorAll(".pixel").forEach
    (   div => div.addEventListener("mouseup",function(e){a=false; if(a&&b)coloring(e)}))
    
    
    document.querySelectorAll(".pixel").forEach
    (   div => div.addEventListener("mousemove", function(e){b=true; if(a&&b)coloring(e)}))
    
  
    
    function coloring(e) {

    if(randomColor)  chosenColor =  'rgb('+Math.floor((Math.random()*255))+','+Math.floor((Math.random()*255))+','+Math.floor((Math.random()*255))+')';
      
      e.target.style.width = pixelSize +'px';
      e.target.style.height = pixelSize + 'px';
      e.target.style.backgroundColor = chosenColor;
           
       }

}


function clean() {
    document.querySelectorAll(".pixel").forEach( 
        div => div.style = "background-color: white;" )
    document.querySelectorAll(".pixel").forEach( 
        div => div.style.width = pixelSize +'px')
    document.querySelectorAll(".pixel").forEach( 
        div => div.style.height = pixelSize + 'px')
    
}

 function randomColoring() {
    randomColor = true;
 }    
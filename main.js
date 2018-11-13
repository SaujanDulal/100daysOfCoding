// grab the canvas element and store in variable
let canvas = document.getElementById("myCanvas");


// set the width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// Create a Drawing Object
// The getContext() is a built-in HTML object, 
// with properties and methods for drawing:
let c = canvas.getContext("2d");


// Constructor

function Circle(x, y, speedX, speedY, radius){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = 'black';
        c.fill();
    }

    this.update = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    
            // if x value reaches innerwidth and 0
        if( this.x + this.radius > innerWidth || this.x - radius < 0){
             this.speedX = -this.speedX;
         }
             // if y value reaches innerHeight and 0
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
             this.speedY = -this.speedY;
         }

        this.draw();

        }
}


// variables



let circleArray = [];
 
for(let i = 0; i < 100; i++){
     let radius = 30;
    //  Now the lowest possible number we can get is 30 
    //  because 0 * (1000 - 60) + 30 = 30. 
    //  The highest possible number is also 970
    //   because 1 * (1000 - 60) + 30 = 970.
     let x = Math.random() * (innerWidth - radius * 2) + radius;  // Math.random() gives random number between 0 and 1
     let y = Math.random() * (innerHeight - radius * 2) + radius;
     let speedX = (Math.random() - 0.5);
     let speedY = (Math.random() - 0.5);
     circleArray.push(new Circle(x, y , speedX, speedY, radius));
    
}





function animate(){   
    
     requestAnimationFrame(animate);                  // pageRefresh after every 60 milisecond and run that function
     c.clearRect(0, 0, innerWidth, innerHeight);      // clear the canvas after each pageRefresh
     
     for( let i = 0; i < circleArray.length; i++){
         circleArray[i].update();
     }

}
animate();


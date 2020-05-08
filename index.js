let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

 function bubble(){
   // for(let i=0; i< values.length;i++){
    for(let j=0; j< values.length-i-1;j++){
        
        if(values[j]>values[j+1]){
         let temp = values[j];
         values[j] = values[j+1];
         values[j+1] = temp;
        }
    }
//}

}


function draw() {
  background(0);
  if (i < values.length) {
  bubble();
  i++;
  } else {
    console.log('sorting complete');
    noLoop();
  }


  for (let i = 0; i < values.length; i++) {
    stroke(255);
   // stroke();
    line(i, height, i, height - values[i]);
  }

  
}

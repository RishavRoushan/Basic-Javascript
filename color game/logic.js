// div part...
let div_red= document.getElementById('red');
let div_green=document.getElementById('green');
let div_blue=document.getElementById('blue');

div_red.onclick = () =>{
  console.log('red');
  alert('red color');
}
div_green.onclick = () =>{
  console.log('green');
  alert('green color');
}
div_blue.onclick = () =>{
  console.log('blue');
  alert('blue color');
}

// button part...
let btn_red= document.getElementById('btn-red');
let btn_green= document.getElementById('btn-green');
let btn_blue= document.getElementById('btn-blue');

const squares=document.querySelectorAll('.btn-color');

const timesClicked={'red':0, 'green':0, 'blue':0}

squares.forEach(square=>{
  square.onclick = () =>{
    timesClicked[square.value]+=1
    square.innerText=timesClicked[square.value]
    console.log(square.value);
  }
})

const clearGameBtn= document.getElementById("clear-game")
clearGameBtn.onclick = () => clearScore();

function clearScore(){
  timesClicked.red=0;
  timesClicked.green=0;
  timesClicked.blue=0;
  squares.forEach(square=>square.innerText="")
}

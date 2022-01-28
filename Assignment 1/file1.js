//counter

//event (on action like clicking on mouse , button press )

//addEventListener

//forEach -> to access every button 
/*
let value = 0;

const value = document.getElementById('value');
const btn = document.querySelectorAll('.btn');




btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        const target = e.target.classList;
        value++;
    })
})
*/
//FINAL VALUES
// let hr = Number(document.getElementById('hr').innerHTML);
// let min = Number(document.getElementById('min').innerHTML);
// let sec = Number(document.getElementById('sec').innerHTML);


/*
//TESTING VALUES
let sec=55;
let min = 59;
let hr =0;

let intervalId;

console.log("sec = ", sec);
console.log("min = ", min);
console.log("hr = ", hr);


function time() {
    if(!intervalId) {
        nIntervalId = setInterval(time2 , 1000); 
}


function time2() {
        if(sec<60){
            sec+=1;
        }
        else if(min<50) {
            
            min+=1;
            sec=1;
        }
        else {
            hr+=1;
            min=0;
            sec=0;
        }

        document.getElementById('sec').innerHTML=sec;
        document.getElementById('min').innerHTML=min;
        document.getElementById('hr').innerHTML=hr;
    }
}

const close = function() {
    clearInterval(intervalId);
    intervalId = null;
}
*/

//storing values and intervalId
let nIntervId;
let hr = Number(document.getElementById('hr').innerHTML);
let min = Number(document.getElementById('min').innerHTML);
let sec = Number(document.getElementById('sec').innerHTML);

console.log("sec = ", sec);
console.log("min = ", min);
console.log("hr = ", hr);


function start() {
    // check if already an interval has been set up
    if (!nIntervId) {
      nIntervId = setInterval(time, 1000);
    }
  }

function time() {
    if(sec<60){
        sec+=1;
    }
    else if(min<50) {
        
        min+=1;
        sec=1;
    }
    else {
        hr+=1;
        min=0;
        sec=0;
    }
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('min').innerHTML=min;
    document.getElementById('hr').innerHTML=hr;

}


function stop() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null; 
  }

  function reset() {
      sec=0;
      min=0;
      hr=0;
      document.getElementById('sec').innerHTML=sec;
      document.getElementById('min').innerHTML=min;
      document.getElementById('hr').innerHTML=hr;
  }
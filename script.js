
const lessBreak = document.querySelector('#break-button-less');
const moreBreak = document.querySelector('#break-button-more');

const lessSession = document.querySelector('#session-button-less');
const moreSession = document.querySelector('#session-button-more');

const sessionCounter = document.querySelector('#session-counter');
const breakCounter = document.querySelector('#break-counter');
const mainCounter = document.querySelector('.main-time');

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const animationBackground = document.querySelector('.background')
var breakTime = 5 ;
var sessionTime = 25;



moreBreak.addEventListener('click',()=>{
    
    
        breakTime+=1;
        breakCounter.textContent = breakTime;
    
})
lessBreak.addEventListener('click',()=>{
    if(breakTime>0)
    {
        breakTime-=1;
        breakCounter.textContent = breakTime;
    }
})

lessSession.addEventListener('click',()=>{
    if(sessionTime >0)
    {
    sessionTime -=1;
    }
    sessionCounter.textContent = sessionTime;
})
moreSession.addEventListener('click',()=>{
    sessionTime +=1;
    sessionCounter.textContent = sessionTime;
})



start.addEventListener('click',()=>{
    clearInterval(countdown)
    let secondSession = sessionTime * 60;
    timer(secondSession);
  
})

let session = 0;
let countdown 
function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    
    displayTimeLeft(seconds);
    countdown =  setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //stop
        if(secondsLeft < 0)
        {   

            clearInterval(countdown);
            
            if (session == 1)
            {
              
                clearInterval(countdown);
                timer(sessionTime*60)
                session = 0
                
            }else 
            {
        
                clearInterval(countdown);
                timer(breakTime*60)
                session = 1
            }
           
            
        }
        displayTimeLeft(secondsLeft);
    },1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    const display = `${minutes}:${reminderSeconds <10 ? '0' : ''}${reminderSeconds}`;
    document.title = display;
    mainCounter.textContent = display;
}


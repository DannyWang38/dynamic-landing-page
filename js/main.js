// DOM elements
const time=document.getElementById('time')
const greeting=document.getElementById('greeting')
const name=document.getElementById('name')
const focus=document.getElementById('focus')
// options
let showAmPm=true

// show time
function showTime(){
    let today=new Date(),
        hour=today.getHours(),
        min=today.getMinutes(),
        sec=today.getSeconds()
    // set AM or PM 
    const ampm=hour>=12?'PM':'AM'

    // 12HR format
    hour=hour%12 || 12

    //output time

    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm?ampm:''}`

    setTimeout(showTime,1000)
}
//add zeros
function addZero(n){
    return (parseInt(n)<10?'0':'') + n
}

// set background and greeting
function setBgGreet(){
    let today=new Date(),
        hour=today.getHours()
        // hour=20
    if(hour<12){
        // morning
        document.body.style.backgroundImage="url('https://i.ibb.co/7vDLJFb/morning.jpg')"
        greeting.textContent = 'Good Morning, '
    }else if(hour<18){
        //afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon, '

    }else{
        //evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')"
        greeting.textContent = 'Good Evening, '
        document.body.style.color = 'white'

    }
}

// get name
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='[Enter Name]'
    }else{
        name.textContent=localStorage.getItem('name')
    }
}

//set name
function setName(e){
    if(e.type==='keypress'){
        // make sure enter is pressed

        console.log(e);
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('name',e.target.innerText)
            name.blur()
        }
    }else{
        localStorage.setItem('name',e.target.innerText)
    }
}

// get focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Enter Focus]'
    }else{
        focus.textContent=localStorage.getItem('focus')
    }
}

function setFocus(e){
    if(e.type==='keypress'){
        // make sure enter is pressed

        console.log(e);
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('focus',e.target.innerText)
            focus.blur()
        }
    }else{
        localStorage.setItem('focus',e.target.innerText)
    }
}

name.addEventListener('keypress',setName)
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus)
time.addEventListener('click',()=>{
    showAmPm=!showAmPm
})

//run
showTime()
setBgGreet()
getName()
getFocus()
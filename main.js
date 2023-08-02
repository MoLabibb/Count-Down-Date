const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months   = ['January', 'February', 'Mars', 'April', 'May', 'June', 'Jule', 'Aughust', 'Sebtember', 'October', 'November', 'December'];

let sections      = document.querySelectorAll('section span'); 
let comingSection = document.querySelector('.coming h2'); 
let theName       = "Mohamed Labib".split("");
let moLabib       =  document.querySelector('.Mo-labib span');

let targetDate  = new Date('Dec 31, 2023 11:59:59');

let year  = targetDate.getFullYear(); 
let month = targetDate.getMonth(); 
let day   = targetDate.getDay(); 
let date  = targetDate.getDate(); 

day = weekDays[day]; 
month = months[month]

comingSection.innerHTML = `${day} ${date} ${month} ${year}` ; 

function getTime(){
    let today         = new Date().getTime(); 
    let timeRemaining = targetDate.getTime()   - today ; 
    let days          = Math.floor(timeRemaining /( 24 *  60 * 60 *  1000));
    let hours         = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000) );
    let minutes       = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000)); 
    let seconds       = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    const values = [days, hours , minutes , seconds ];
    sections.forEach((section, index)=>{
        section.innerHTML =updateTime(values[index]);
    })
    chekTarget(timeRemaining); 
    
}
function updateTime(value){
    if(value < 10 ){
        return `0${value}`
    }else{
        return value  ; 
    }
}
let countDown  = setInterval(getTime, 1000);

function chekTarget(timeRemaining){
    if(timeRemaining <= 0 ){
        console.log(timeRemaining);
        clearInterval(countDown);

    }
}

getTime();

let name  = setInterval(addname, 1000);
let  i = 0 ; 
function addname(){
    if(i < theName.length){
        moLabib.innerHTML += theName[i];
        i++
    }else{
        setTimeout(() => {
            moLabib.innerHTML = '';
            i = 0  ; 
        }, 1000);

    }

}
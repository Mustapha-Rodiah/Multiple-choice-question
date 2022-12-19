const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const question = document.querySelector('.question');
const number = document.querySelector('.number');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const submit = document.querySelector('.submit');
const option_a= document.querySelector('.option_a');
const option_b = document.querySelector('.option_b');
const option_c = document.querySelector('.option_c');
const option_d = document.querySelector('.option_d');
const time= document.querySelector('.time');
const container = document.querySelector('.container');
const options = document.querySelectorAll('input[name = "options"]');
var checked = document.getElementsByName('options');
let second = 60;
let minute = 1;
let counter = 0;
let score = 0;
window.addEventListener('load',() => {
 
   let int = setInterval(()=> {
    minuteString = minute.toString();
     if(second == 0){
        minute--;
    second = 60;
    
 } 
    if(minuteString.length < 2){
        minute = '0' + minuteString;
     }
     else {
        minute = minute
     }
 second--;
 if(second < 10){
    second = '0'+ second 
 }

 else {
    second = second
 }

   
time.innerHTML =`${minute}:${second}`

   }, 1000)
   setTimeout(()=> {
    clearInterval(int);
    update()
container.innerHTML = `Oops you ran out of time. Your score is ${score}/${data.length}`

}, 120000)
display(counter)
   })
const data = [{
   serial_number: '1.',
   q: 'Which language runs in a web browser?',
   a: 'Java',
   b: 'C',
   c: 'Python', 
   d:'Javascript',
   
   correct: "d",
   isChecked: ""

},

{
    serial_number: '2.',
    q: 'What year was Javascript launched',
    a: 1984,
    b: 1995,
    c: 1999,
    d:'1941',
    correct: "b",
    isChecked: ""
}, 
{
    serial_number: '3.',
    q: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Simple Sheets',
    c: 'Cascading Style Sheets',
    d:'None of the above',
    correct: "c",
    isChecked: ""
}
]

function display(){
let current = data[counter];
number.innerText = current.serial_number;
question.innerText = current.q;
option_a.innerText = current.a;
option_b.innerText = current.b;
option_c.innerText = current.c;
option_d.innerText = current.d;

// for (let i = 0; i < checked.length; i++) {
//     const element = checked[i];
   



// }
}
deselect()
function deselect(){
let current = data[counter];
 options.forEach(option => {
            if (current.isChecked !== '') {



  if(option.id == current.isChecked){

            option.checked = true;
        }


        } else{

            option.checked = false;
        }

 })
}
//  options.forEach(option => {
//     option.addEventListener('change'),update()
//  })
function update(){
let current = data[counter];
    options.forEach(option => {

  let duplicate = score;
//   option.addEventListener('change', ()=>{
            if(option.checked){
            answer = option.id;
        // console.log(option.id);

           if(current.correct == answer && current.isChecked != current.correct){
                 duplicate++;
                 current.isChecked = `${option.id}`
                //  score = duplicate;
           } else if(current.correct != answer && current.isChecked == current.correct){
                 duplicate--;
                 current.isChecked = `${option.id}`
                //  score = duplicate;
           } 
           current.isChecked = `${option.id}`
           
           score = duplicate;
            //     console.log(option.checked)
            
            //     // current.isChecked = option.id
            
        }
        // console.log(current.isChecked);
        console.log(score);
        
    })

    return score;
}

function disable(){
    if(counter == 0){
        previous.disable 
        
        
        = true
        }
        else{
            minus()
        }
}


next.addEventListener('click', add)
function add() {
    const answer = update();
    
    counter++;
    if(counter > data.length - 1){
        counter = 0;
    }
    display(counter);
    deselect()
   
}
previous.addEventListener('click', minus)
function minus(){
    if(counter == 0){
        previous.disable = true
        previous.style.cursor = 'not-allowed';
        }
        else{
         
        
    const answer = update()
    counter--;
    if(counter < 0){
        counter = data.length -1
    };
    display(counter);
        deselect();}
}

submit.addEventListener('click', () => {
    update();
    container.innerHTML = `You have successfully completed your exam.Your score is ${score}/${data.length}`
})
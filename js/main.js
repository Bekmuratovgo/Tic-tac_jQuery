let container = document.querySelector('.container');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');


//1. Мы создаем событие клика игры 

container.addEventListener('click',condition);

//счетчик для определения очереди кликов
let counter = 0;



//2.Функция которая будет определять наших блоков и выполнять им клики 
function condition(e){
    // console.log(e.target.classList.contains('col-lg-4'));//пример или обьяснение 
    if(e.target.classList[0] == "col-lg-4"){
        //если наш счетчик четный 
        if(counter % 2 == 0){
            if(e.target.classList.contains('tic') == false && e.target.classList.contains('tac') == false){
                e.target.classList.add('tic');
                e.target.classList.add('ticbg');
                ticWinner();
                counter++;
            }else{ 
                return;
            }
        }
        //если наш счетчик НЕчетный 
        else if(counter % 2 == 1){
            if(e.target.classList.contains('tac') == false && e.target.classList.contains('tic') == false){
                e.target.classList.add('tac');
                e.target.classList.add('tacbg');
                tacWinner();
                counter++;
            }else{
                return; 
            }
        }
    }
}

//Функция для определения победителя крестиков
    function ticWinner(){
        if(box1.classList[2] == "tic" && box2.classList[2] == "tic" && box3.classList[2] == "tic"){
            box1.classList.add('redbg');
            box2.classList.add('redbg');
            box3.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box4.classList[2] == "tic" && box5.classList[2] == "tic" && box6.classList[2] == "tic"){
        box4.classList.add('redbg');
        box5.classList.add('redbg');
        box6.classList.add('redbg');
        ticWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
        }else if(box7.classList[2] == "tic" && box8.classList[2] == "tic" && box9.classList[2] == "tic"){
            box7.classList.add('redbg');
            box8.classList.add('redbg');
            box9.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box1.classList[2] == "tic" && box4.classList[2] == "tic" && box7.classList[2] == "tic"){
            box1.classList.add('redbg');
            box4.classList.add('redbg');
            box7.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box2.classList[2] == "tic" && box5.classList[2] == "tic" && box8.classList[2] == "tic"){
            box2.classList.add('redbg');
            box5.classList.add('redbg');
            box8.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box3.classList[2] == "tic" && box6.classList[2] == "tic" && box9.classList[2] == "tic"){
            box3.classList.add('redbg');
            box6.classList.add('redbg');
            box9.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box1.classList[2] == "tic" && box5.classList[2] == "tic" && box9.classList[2] == "tic"){
            box1.classList.add('redbg');
            box5.classList.add('redbg');
            box9.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }else if(box3.classList[2] == "tic" && box5.classList[2] == "tic" && box7.classList[2] == "tic"){
            box3.classList.add('redbg');
            box5.classList.add('redbg');
            box7.classList.add('redbg');
            ticWinnerCounter.innerHTML++;
            container.removeEventListener('click',condition);
        }
    }

//Функция для определения победителя ноликов

function tacWinner(){
    if(box1.classList[2] == "tac" && box2.classList[2] == "tac" && box3.classList[2] == "tac"){
        box1.classList.add('redbg');
        box2.classList.add('redbg');
        box3.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box4.classList[2] == "tac" && box5.classList[2] == "tac" && box6.classList[2] == "tac"){
    box4.classList.add('redbg');
    box5.classList.add('redbg');
    box6.classList.add('redbg');
    tacWinnerCounter.innerHTML++;
    container.removeEventListener('click',condition);
    }else if(box7.classList[2] == "tac" && box8.classList[2] == "tac" && box9.classList[2] == "tac"){
        box7.classList.add('redbg');
        box8.classList.add('redbg');
        box9.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box1.classList[2] == "tac" && box4.classList[2] == "tac" && box7.classList[2] == "tac"){
        box1.classList.add('redbg');
        box4.classList.add('redbg');
        box7.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box2.classList[2] == "tac" && box5.classList[2] == "tac" && box8.classList[2] == "tac"){
        box2.classList.add('redbg');
        box5.classList.add('redbg');
        box8.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box3.classList[2] == "tac" && box6.classList[2] == "tac" && box9.classList[2] == "tac"){
        box3.classList.add('redbg');
        box6.classList.add('redbg');
        box9.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box1.classList[2] == "tac" && box5.classList[2] == "tac" && box9.classList[2] == "tac"){
        box1.classList.add('redbg');
        box5.classList.add('redbg');
        box9.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }else if(box3.classList[2] == "tac" && box5.classList[2] == "tac" && box7.classList[2] == "tac"){
        box3.classList.add('redbg');
        box5.classList.add('redbg');
        box7.classList.add('redbg');
        tacWinnerCounter.innerHTML++;
        container.removeEventListener('click',condition);
    }
}
//продолжение -Счетчик победителя

let ticWinnerCounter = document.querySelector('.ticWinner');
let tacWinnerCounter = document.querySelector('.tacWinner');
let resetWinnerBtn = document.querySelector('.resetWinner');


//Кнопка для начала игры заново
let reset = document.querySelector('.reset');

reset.addEventListener('click', (e) =>{
    e.preventDefault()
    counter = 0;

    box1.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box2.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box3.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box4.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box5.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box6.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box7.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box1.classList.remove('ticbg','tacbg','tic','tac','redbg');
    box1.classList.remove('ticbg','tacbg','tic','tac','redbg');

    container.addEventListener('click',condition);
})

//!!!!!!!!!!!!!!! Выбор темы !!!!!!!!!!!!!!!!!!!!!!!!!!!!
let selectBox = document.querySelector('#select');

window.addEventListener('load', () =>{
    if(localStorage.getItem('color_theme') != null){
        let bg = localStorage.getItem('color_theme');
        document.body.style.backgroundColor = bg;
    }

    if(localStorage.getItem('selected_theme') != null){
        let selected = localStorage.getItem('selected_theme');
        selectBox.value = selected;
    }

    selectBox.addEventListener('change', () =>{
        //console.log(selectBox.value);
        if(selectBox.value == "light"){
            document.body.style.backgroundColor = "#E6E6FA";
            localStorage.setItem('color_theme','#E6E6FA');
            localStorage.setItem('selected_theme','light');
        }else if(selectBox.value == "purple"){
            document.body.style.backgroundColor = "#EE82EE";
            localStorage.setItem('color_theme','#EE82EE');
            localStorage.setItem('selected_theme','purple');
        }else if(selectBox.value == "orange"){
            document.body.style.backgroundColor = "#FF8C00";
            localStorage.setItem('color_theme','#FF8C00');
            localStorage.setItem('selected_theme','orange');
        }
    })
})
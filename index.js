let displayBox = document.getElementById('display');
let buttons = document.querySelectorAll('button')


let number = "";

buttons.forEach(element => {
    element.addEventListener('click',(bt)=>{
        if(bt.target.innerText == "="){
            number = String(eval(number));
            displayBox.value = number;
        }
        else if(bt.target.innerText == 'AC'){
            number=""
            displayBox.value = number;
        }
        else if(bt.target.innerText == "DEL"){
            number = number.substring(0,number.length-1);
            displayBox.value = number;
        }
        else if(bt.target.id =='plusminus'){
            number = String(-eval(number));
            displayBox.value = number;
        }
        else{
            number += bt.target.innerText;
            displayBox.value = number;
        }
    })
});
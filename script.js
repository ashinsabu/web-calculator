function operate(num1,num2,operator){
    let ans;
    if(operator === '+')
        ans=num1+num2;
    else if(operator === '-')
        ans=num1-num2;
    else if(operator === '*')
        ans=num1*num2;
    else if(operator === '/')
        ans=num1/num2;
    return ans;
}
let display = document.querySelector('.display');
display.innerText="0";

let digitbuttons = document.querySelectorAll('.digitbtn');

let operatorbuttons = document.querySelectorAll('.operatorbtn');


let enteredvalue="";
let storedvalue="";
let result="";
let curoperator="";

digitbuttons.forEach(item => {
    item.addEventListener('click',(e) =>{
        
        enteredvalue+=e.target.innerText;
        display.innerHTML=enteredvalue;
        console.log(enteredvalue);
    })
});

operatorbuttons.forEach(item=> {
    item.addEventListener('click',(e) =>{
        // console.log(e.target.innerText);
        display.innerHTML="";
        // console.log(curoperator);
        if(curoperator=='='){
            curoperator=e.target.innerText;
            enteredvalue="";
        }
        else if(storedvalue === "" ){
            curoperator=e.target.innerText;
            storedvalue=enteredvalue;
            enteredvalue="";
        }
        else{
            var a = parseFloat(storedvalue);
            var b = parseFloat(enteredvalue);
            var res = operate(a,b,curoperator);
            storedvalue=res;
            display.innerText=storedvalue;
            enteredvalue="";
            curoperator=e.target.innerText;
        }
        console.log(curoperator);
        // curoperator=e.target.innerText;

    })
});

let equalbtn = document.querySelector('.equalbtn');
equalbtn.addEventListener('click',(e) =>{
           
            var a = parseFloat(storedvalue);
            var b = parseFloat(enteredvalue);
            var res = operate(a,b,curoperator);
            storedvalue=res;
            display.innerText=storedvalue;
            enteredvalue="";
            curoperator="=";
});

let clearbtn = document.querySelector('.clear-button');
clearbtn.addEventListener('click',()=>{
    storedvalue="";
    enteredvalue="";
    curoperator="";
    display.innerText="0";
});

let deletebtn = document.querySelector('.delete-button');
deletebtn.addEventListener('click',() => {
    if(enteredvalue.length>0){
        enteredvalue = display.innerText;
        enteredvalue=enteredvalue.substring(0,enteredvalue.length-1);
        display.innerText = enteredvalue;
    }
});
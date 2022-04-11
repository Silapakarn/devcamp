//Variable
const calculatorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


//Calculate 
const calculate={
    "/":(firstNumber,secondNumber)=>secondNumber>0? firstNumber/secondNumber: 'error',
    "*":(firstNumber,secondNumber)=>firstNumber*secondNumber,
    "+":(firstNumber,secondNumber)=>firstNumber+secondNumber,
    "-":(firstNumber,secondNumber)=>firstNumber-secondNumber,
    "=":(firstNumber,secondNumber)=>secondNumber
    
};



// ตัวเลขที่ 1 เชื่อม ตัวดำเนินการ ตัวเลขที่ 2 เช่น 10 + 20  
let firstValue = 0; // ตัวเลขที่ 1
let operatorValue = ''; // เก็บตัวดำเนินการ
let waitForNext = false; // เก็บตัวเลขที่ 1 กับ ตัวดำเนินการ


function setNumberValue(number){
    if(waitForNext){
        calculatorDisplay.textContent = number;
        waitForNext = false;
    }else{
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }

}

function callOperator(operator){
   const currenValue = Number(calculatorDisplay.textContent);

    //ไม่สามารถใส่ operator อีกรอบ ซ้ำได้จนกว่าจะคำนวณเสร็จ
   if(operatorValue && waitForNext){
    operatorValue = operator;
    return;
   }
   // กำหนดค่าเริ่มต้น ถ้าป้อนเป็น 70 ก็จะเก็บไว้ใน firstValue
   if(!firstValue){
       firstValue = currenValue;
   }else{
       const result =calculate[operatorValue](firstValue,currenValue);

        calculatorDisplay.textContent = result;
        firstValue = result;
       //ถ้าค่าที่ส่งมาเป็น error จะทำคำสั่ง reset เป็น 0 
       if(firstValue == 'error'){
           resetAll();
       }
   }
   // ถ้าเก็บตัวเลขที่ 1 กับ ตัวดำเนินการ แล้ว waitForNext จะเป็น True
   operatorValue = operator;
   waitForNext = true;

}


function addDecimal(){
    //ถ้าเก็บค่าใน waitForNext ไม่ต้องทำงาน . 
    if(waitForNext) return;
    //ถ้าหากยังไม่มีการใส่ . จะให้เเสดง . ไม่สามารถใส่ . ได้อีก
    if(!calculatorDisplay.textContent.includes(".")){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
    // เมื่อมีการกดใช้งานจะเรียกใช้งาน addDecimal และ calculatorDisplay ที่มี . ต่อท้าย

}

inputBtn.forEach((input)=>{
    //ปุ่มตัวเลขเลข 0-9
    if(input.classList.length === 0){
        input.addEventListener('click',()=>setNumberValue(input.value));
    //ปุ่มรับตัวดำเนินการทางคณิตศาสตร์
    }else if (input.classList.contains("operator")){
        input.addEventListener('click',()=>callOperator(input.value));
    //ปุ่ม decimal หรือ . 
    }else if(input.classList.contains("decimal")){
        input.addEventListener('click',()=>addDecimal(input.value));
    }
});


/*กดคำสั่ง c เเล้ว calculatorDisplay จาก tag h1 จะกลายเป็น 0*/
function resetAll(){
    firstValue = 0;
    operator = '';
    waitForNext = false;
    calculatorDisplay.textContent='0';
}
clearBtn.addEventListener('click',()=>resetAll());

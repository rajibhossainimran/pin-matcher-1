


function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// start 
document.getElementById('btn-generate').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    const pinField = document.getElementById('set-pin-field');
    pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){

    const number = event.target.innerText;
    const calculatorField = document.getElementById('set-calculator-field');
    const previousNumber = calculatorField.value;

    if(isNaN(number)){
        if(number === 'C'){
            calculatorField.value = '';
        }
        if(number === '<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            calculatorField.value = remainingDigit;
        }
    }
    else{
        
        const newNumber = previousNumber + number;
        calculatorField.value = newNumber;
    }
    
})

document.getElementById('check-btn').addEventListener('click',function() {
    const generatePinField = document.getElementById('set-pin-field');
    const pinNumber = generatePinField.value;
    const calculatorPinField = document.getElementById('set-calculator-field');
    const typingPin = calculatorPinField.value;
    if(typingPin === pinNumber){
        const message = document.getElementById('match');
        message.style.display = 'block';
        const notMatchMessage = document.getElementById('not-match');
        notMatchMessage.style.display = 'none';
        console.log('successful')
    }else{
        const notMatchMessage = document.getElementById('not-match');
        notMatchMessage.style.display = 'block';
        const message = document.getElementById('match');
        message.style.display = 'none';
    }
    
})
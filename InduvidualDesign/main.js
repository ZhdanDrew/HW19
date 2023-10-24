let FirstInput = "";
let SecondInput = "";
let operation = "";
let result = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['-', '+', 'X', '/', "%"];


const GetScreen = document.querySelector('.screen p');

function ClearAll(){
    FirstInput = "";
    SecondInput = "";
    operation = "";
    result = false;
    GetScreen.textContent = 0;
}

document.querySelector('.ac').onclick = ClearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('but')) return;
    if(event.target.classList.contains('ac')) return;

    GetScreen.textContent = '';
    const key = event.target.textContent

    if (numbers.includes(key)) {
        if (SecondInput === '' && operation === ''){
        FirstInput += key;
        console.log(FirstInput, SecondInput, operation);
        GetScreen.textContent = FirstInput;
        }
        else if (FirstInput !== '' && SecondInput !== '' && result){
            SecondInput = key;
            result = false;
            GetScreen.textContent = SecondInput;
        }
        else{
            SecondInput += key;
            GetScreen.textContent = SecondInput;
        }
        console.log(FirstInput, SecondInput, operation);
        return;
    }

    if (signs.includes(key)){
        operation = key;
        GetScreen.textContent = operation;
        console.log(FirstInput, SecondInput, operation);
        return;
    }

    if (key === '+/-') {
        if (FirstInput !== '') {
            FirstInput = -parseFloat(FirstInput);
            GetScreen.textContent = FirstInput;
        } else if (SecondInput !== '') {
            SecondInput = -parseFloat(SecondInput);
            GetScreen.textContent = SecondInput;
        }
        console.log(FirstInput, SecondInput, operation);
        return;
    }

    if (key === '=') {
        if (SecondInput === '') {
            SecondInput = FirstInput;
        }
        switch (operation) {
            case '+':
                FirstInput = parseFloat(FirstInput) + parseFloat(SecondInput);
                break;
            case '-':
                FirstInput = parseFloat(FirstInput) - parseFloat(SecondInput);
                break;
            case 'X':
                FirstInput = parseFloat(FirstInput) * parseFloat(SecondInput);
                break;
            case '/':
                if (SecondInput === '0') {
                    GetScreen.textContent = 'Error';
                    FirstInput = "";
                    SecondInput = "";
                    operation = "";
                    return;
                }
                FirstInput = parseFloat(FirstInput) / parseFloat(SecondInput);
                break;
            case '%':
                FirstInput = parseFloat(FirstInput) / 100 * parseFloat(SecondInput);
                break;
            }
        
        }
        result = true;
        GetScreen.textContent = FirstInput;
        // Сбросьте второй операнд и операцию после каждого вычисления
        SecondInput = "";
        operation = "";
    }


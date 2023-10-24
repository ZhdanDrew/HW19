const calculate = document.getElementById("calculate");
const calculation = document.getElementById("calculation");

const clearElement = document.getElementById("clear-element");
const clearAll = document.getElementById("clear-all");

const input = document.getElementById("input");

const charButtons = Array.from(document.getElementsByClassName("char"));

calculate.onclick = function () {
    calculation.textContent = input.value;
    const result = eval(input.value)
    input.value = result;
}

clearAll.onclick = function () {
    input.value = "";
    calculation.textContent = "";
}

clearElement.onclick = function () {
    input.value = input.value.slice(0, input.value.length - 1);
};

for (const button of charButtons){
    console.log(button);
    button.onclick = function(){
        input.value = input.value + button.textContent;
    }
}
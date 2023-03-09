const displayPreviousValue = document.querySelector("#previous-value");
const displayCurrentValue = document.querySelector("#current-value");
const buttonNumbers = document.querySelectorAll(".number");
const buttonsOperator = document.querySelectorAll(".operator");
const remove = document.querySelector("#del");
const removeAll = document.querySelector("#del-all");

const display = new Display(displayPreviousValue, displayCurrentValue);

buttonNumbers.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonsOperator.forEach(button =>{
    button.addEventListener("click", ()=> display.compute(button.value));
})

remove.addEventListener("click", ()=>display.deleted());
removeAll.addEventListener("click", ()=> display.deleteAll());
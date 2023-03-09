class Display{
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.valueCurrent = "";
        this.valuePrevious = "";
        this.signs = {
            sum: "+",
            subtract: "-",
            multiply: "X",
            split: "%",
        };
    }

    deleted(){
        this.valueCurrent = this.valueCurrent.toString().slice(0,-1);
        this.printValues();
    }
    deleteAll(){
        this.valueCurrent = "";
        this.valuePrevious = "";
        this.operationType = undefined;
        this.printValues();
    }

    compute(type){
        this.operationType !== "same" && this.calculate();
        this.operationType = type;
        this.valuePrevious = this.valueCurrent || this.valuePrevious;
        this.valueCurrent = "";
        this.printValues();
    }

    addNumber(num) {
        if(num === "." && this.valueCurrent.includes(".")) return;
        this.valueCurrent = this.valueCurrent.toString() + num.toString();
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.valueCurrent;
        this.displayPreviousValue.textContent = `${this.valuePrevious} ${this.signs[this.operationType] || " "}`;
    }
    calculate(){
        const valuePrevious = parseFloat(this.valuePrevious);
        const valueCurrent = parseFloat(this.valueCurrent);

        if (isNaN(valuePrevious) || isNaN(valueCurrent)) return;
        this.valueCurrent = this.calculator[this.operationType](valuePrevious, valueCurrent);
    }
    
}
class Calculator{
    constructor(prevOperandTextElement , currOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement

    }

    clear(){
      this.currOperand = ""
       this.prevOperand = ""
       this.operator = undefined


    }
    delete(){

    }
    appendNumber(number){
    this.currOperand = number
    }
    chooseOperator(operator){

    }
    compute(){

    }

    updateDisplay(){
     this.currOperandTextElement.innerText = this.currOperand
    }

}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-clear]');
const prevOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(prevOperandTextElement,currOperandTextElement)

numberBtn.forEach( button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
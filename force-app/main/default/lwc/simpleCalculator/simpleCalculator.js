import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    @track result;
    @track previousResults = [];
    @track showPreviousResults = false;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.result);
    }
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.result);
    }
    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.result);
    }
    dividHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.result);
    }
    showPreviousResultstoggle(event){
        this.showPreviousResults = event.target.checked;
    }
}
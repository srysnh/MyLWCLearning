import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track showDiv = false;
    @track cityList = ['Jaipur','Bengaluru','Hyderabad'];

    showDivHandler(event){
        this.showDiv = event.target.checked;
    }
}
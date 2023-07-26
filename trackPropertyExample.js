import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  @track address={
        city: 'Nagpur',
        country: 'India',
        pincode: '442401'        
    }

    trackHandler(event){
        this.address.city= event.target.value
    }
}  

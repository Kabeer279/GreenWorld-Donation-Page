import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(private winRef: WindowService) {
    // getting the native window obj
    console.log('Native window obj', winRef.nativeWindow);
}
// rzp1:any;
//     options = {
//        "key": "rzp_test_HTQz79bVMhpN4L",
//        "amount": "2000",
//        "name": "Merchant Name",
      
//     };
public rzp1: any;
public options: any = {
  key: 'rzp_test_PElh6vLLCqxiCJ', // add razorpay key here
  name: 'The Coder',
  description: 'Donation',
  amount: 10000, // razorpay takes amount in paisa
  prefill: {
    name: 'The Coder',
    email: 'ahamedkabeer525@gmail.com', // add your email id
  },
  notes: {},
  theme: {
    color: '#3880FF'
  },
 
};


  ngOnInit(): void {
  }

  public donates( ):void{

    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }

}

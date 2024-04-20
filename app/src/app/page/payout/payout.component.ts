import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payout.component.html',
  styleUrl: './payout.component.css'
})
export class PayoutComponent {
  public payoutForm!: FormGroup 
  
  constructor(private formbuilder: FormBuilder) {
    this.payoutForm = this.formbuilder.group({
      name: [''],
      chest: [''],
      date: [''],
      value: [''],
    }); }
  get rowHead(){
    return Object.keys(this.rowData[0]);
  }

  public rowData = [
    {
      name: 'Payout 1',
      chest: 'Coffre 1',
      date: '01/01/2021',
      value: '1000',
    },
    {
      name: 'Payout 2',
      chest: 'Coffre 2',
      date: '02/02/2021',
      value: '2000',
    },
    {
      name: 'Payout 3',
      chest: 'Coffre 3',
      date: '03/03/2021',
      value: '3000',
    },
    {
      name: 'Payout 4',
      chest: 'Coffre 4',
      date: '04/04/2021',
      value: '4000',
    },
    {
      name: 'Payout 5',
      chest: 'Coffre 5',
      date: '05/05/2021',
      value: '5000',
    },
  ]

  ngOnInit(): void {
  }


  addPayout(){
    console.log(this.payoutForm.value);
    this.rowData.push(this.payoutForm.value);
    this.payoutForm.reset();
  }
}

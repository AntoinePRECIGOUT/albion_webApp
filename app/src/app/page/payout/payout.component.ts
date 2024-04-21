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
  public inputName: string = '';
  private alreadyPlayed: boolean = false;
  public audio:any
  
  constructor(private formbuilder: FormBuilder) {
  }
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
    this.payoutForm = this.formbuilder.group({
      name: ['',Validators.required],
      chest: ['',Validators.required],
      date: ['',Validators.required],
      value: ['',Validators.required],
    }); 
  }


  addPayout(audio:any){
    audio.pause();
    this.rowData.push(this.payoutForm.value);
    this.payoutForm.reset(); 
  }


  upperCase(value: string){
    return value.toUpperCase();
  }
  playSound(){
    let audio = new Audio('../assets/aroundTheWorld.mp3');
    if (this.alreadyPlayed === true && audio.paused === true){
      this.alreadyPlayed = false;
    }
    if (this.payoutForm.status === 'VALID' && this.alreadyPlayed === false){
      this.alreadyPlayed = true;
      audio.load();
      audio.playbackRate = 1.5;
      audio.play();
    }
    return audio
  }


  stopSound(audio:any){
    audio.pause(); 
  }
}

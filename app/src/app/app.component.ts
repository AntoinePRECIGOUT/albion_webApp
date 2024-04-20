import { Component, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { OnChanges } from '@angular/core';
import { PayoutComponent } from './page/payout/payout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavBarComponent,PayoutComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes);
  }

  onChangeTab(event:any){
    this.tab = event;
  }
  public tab:number = 0;
  title = 'albion-payout';
}

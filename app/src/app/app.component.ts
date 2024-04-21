import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { PayoutComponent } from './page/payout/payout.component';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavBarComponent,PayoutComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{  
  title = 'albion-payout';
}

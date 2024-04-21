import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public currentTab: number = 0

  tab = output<number>();
  

  public goTo(tabArg: number) {
    this.currentTab = tabArg;
    this.tab.emit(tabArg);
  }
}



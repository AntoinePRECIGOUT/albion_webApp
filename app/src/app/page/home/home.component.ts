import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public data = {
    title: 'Albion Payout',
    description: 'Albion Payout is a tool to help you manage your guild payouts.',
  };

  public guild = {
    officier: [
      { name: 'Player 1', contribution: 100 },
      { name: 'Player 2', contribution: 200 },
      { name: 'Player 3', contribution: 300 },
      { name: 'Player 4', contribution: 400},
      { name: 'Player 5', contribution: 500},
      { name: 'Player 6', contribution: 600},
      { name: 'Player 1', contribution: 100 },
      { name: 'Player 2', contribution: 200 },
      { name: 'Player 3', contribution: 300 },
      { name: 'Player 4', contribution: 400},
      { name: 'Player 5', contribution: 500},
      { name: 'Player 6', contribution: 600},
    ],
    members: [
      { name: 'Player 1', contribution: 100 },
      { name: 'Player 2', contribution: 200 },
      { name: 'Player 3', contribution: 300 },
      { name: 'Player 4', contribution: 400},
      { name: 'Player 5', contribution: 500},
      { name: 'Player 6', contribution: 600},
    ],
  };
}

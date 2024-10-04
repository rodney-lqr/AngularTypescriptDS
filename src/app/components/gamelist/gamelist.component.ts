import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',

  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: string[] = ['League of Legends', 'Minecraft', 'Call of Duty'];
  newGames: string = '';

  addGame() {
    if (this.newGames.trim()) {
      this.games.push(this.newGames);
      this.newGames = '';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CellEnum } from '../cell/cellEnum';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: []
})
export class BoardComponent implements OnInit {
  private currentPlayer: CellEnum;
  public board: CellEnum[][];
  private isGameOver: boolean;
  public statusMessage;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  get gameOver(): boolean {
    return this.isGameOver;
  }

  newGame() {
    this.board = [];
    for (let row = 0; row < 3; row++) {
      this.board[row] = [];
      for (let col = 0; col < 3; col++) {
        this.board[row][col] = CellEnum.EMPTY;
      }
    }
    this.currentPlayer = CellEnum.X;
    this.isGameOver = false;
    this.statusMessage = `Player ${this.currentPlayer}'s turn`;
  }


}

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
  private canPlayerMove: boolean;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  get gameOver(): boolean {
    return this.isGameOver;
  }

  newGame() {
    this.canPlayerMove = true;
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

  cpuMove(): void {
    this.currentPlayer = CellEnum.O;
    // if CPU Turn - Wait 1 second then make move
    if (this.currentPlayer === CellEnum.O) {
        this.statusMessage = `CPU is thinking...`;
        this.delay(1000).then(any=>{
          // CPU MOVE LOGIC
          for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
              if (this.board[row][col] === CellEnum.EMPTY) {
                this.board[row][col] = CellEnum.O;
                this.canPlayerMove = true;
                break;
              }
            }
            break;
          }
          // Check if cpu win
          if (this.isWin()) {
            this.statusMessage = `Player ${this.currentPlayer} won!`;
            this.isGameOver = true;
          } else {
            this.currentPlayer = CellEnum.X;
            this.statusMessage = `Player ${this.currentPlayer}'s turn!`
          }
    });
    }
  }

  move(row: number, col: number): void {
    if (!this.isGameOver && this.board[row][col] === CellEnum.EMPTY && this.canPlayerMove) {
      this.board[row][col] = this.currentPlayer;
      if (this.isDraw()) {
        this.statusMessage = 'It\'s a Draw!';
        this.isGameOver = true;
      } else if (this.isWin()) {
        this.statusMessage = `Player ${this.currentPlayer} won!`;
        this.isGameOver = true;
       } else if (this.canPlayerMove) {
        this.statusMessage = `Player ${this.currentPlayer}'s turn`;
        this.canPlayerMove = false;
        this.cpuMove();
      }
    }
  }

  isDraw(): boolean {
    for (const columns of this.board) {
      for (const col of columns) {
        if (col === CellEnum.EMPTY) {
          return false;
        }
      }
    }
    return !this.isWin();
  }

  isWin(): boolean {
    // horizontal
    for (const rows of this.board) {
      if (rows[0] === rows[1] && rows[0] === rows[2] && rows[0] !== CellEnum.EMPTY) {
        return true;
      }
    }

    // vertical
    for (let col = 0; col < this.board[0].length; col++) {
      if (
        this.board[0][col] === this.board[1][col] &&
        this.board[0][col] === this.board[2][col] &&
        this.board[0][col] !== CellEnum.EMPTY
      ) {
        return true;
      }
    }
    //diagonal
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== CellEnum.EMPTY
    ) {
      return true;
    }

    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0] &&
      this.board[0][2] !== CellEnum.EMPTY
    ) {
      return true;
    }
    return false;
  }


}

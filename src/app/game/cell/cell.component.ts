import { Component, OnInit, Input } from '@angular/core';
import { CellEnum } from './cellEnum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styles: []
})
export class CellComponent implements OnInit {

  @Input() public piece: CellEnum = CellEnum.EMPTY;
  @Input() public row: number;
  @Input() public col: number;

  constructor() { }

  ngOnInit() {
  }

}

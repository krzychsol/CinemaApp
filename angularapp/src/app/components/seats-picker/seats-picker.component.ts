import { Component } from '@angular/core';


@Component({
  selector: 'app-seats-picker',
  templateUrl: './seats-picker.component.html',
  styleUrls: ['./seats-picker.component.css']
})
export class SeatsPickerComponent {
  tick: number = 0;
  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];
  
  public getStatus(seatPos: string) {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    }
    return undefined;
  }

  public clearSelected() {
    this.selected = [];
  }

  public seatClicked(seatPos: string) {
    var index = this.selected.indexOf(seatPos);

    if (index !== -1) {
      // seat already selected, remove
      this.selected.splice(index, 1);
    } else {
      //push to selected array only if it is not reserved
      if (this.reserved.indexOf(seatPos) === -1)
        this.selected.push(seatPos);
    }
  }

  public showSelected() {
    if (this.selected.length > 0) {
      this.tick = this.selected.length;
    } else {
      alert("Nie wybrano miejsc!");
    }
  }
}


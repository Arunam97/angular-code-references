import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  bool_visible: boolean = false;

  showDialog() {
    this.bool_visible = true;
  }
}

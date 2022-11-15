import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() checked = new EventEmitter();

  darkModeOn(){
    this.checked.emit();
  }

}

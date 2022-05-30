import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
})
export class BackdropComponent implements OnInit {
  @Output() backdropClickedEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBackdropClicked() {
    this.backdropClickedEvent.emit();
  }
}

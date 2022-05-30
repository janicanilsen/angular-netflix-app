import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent implements OnInit {
  @Output() backdropEvent = new EventEmitter();
  faTimesIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.backdropEvent.emit();
  }

}

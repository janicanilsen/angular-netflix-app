import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.css']
})
export class MovieListContainerComponent implements OnInit {
  @Input() viewMode!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

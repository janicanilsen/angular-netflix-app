import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements OnInit {
  imagePath?: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.imagePath =
      this.moviesService.imageBaseUrl +
      this.moviesService.imageBaseSize +
      this.moviesService.displayMovieSubject.getValue().backdrop_path;
  }

}

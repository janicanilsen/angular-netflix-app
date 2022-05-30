import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-backdrop',
  templateUrl: './movie-backdrop.component.html',
  styleUrls: ['./movie-backdrop.component.css'],
})
export class MovieBackdropComponent implements OnInit {
  @Input() movie!: Movie;
  imagePath: string = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.imagePath =
      this.movieService.imageBaseUrl +
      this.movieService.imageBaseSize +
      this.movie.backdrop_path;
  }

  onClickMovie(movie: Movie) {
    this.movieService.setMovieDetailDisplay(movie);
  }
}

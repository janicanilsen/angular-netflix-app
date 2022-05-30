import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css'],
})
export class MoviePosterComponent implements OnInit {
  @Input() movie!: Movie;
  imagePath: string = '';
  showMovieDetails: boolean = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.imagePath =
      this.movieService.imageBaseUrl +
      this.movieService.imageBaseSize +
      this.movie.poster_path;
  }

  onShowModal() {
    this.showMovieDetails = true;
    this.movieService.setMovieDetailDisplay(this.movie);
  }

  onHideModal() {
    this.showMovieDetails = false;
    this.movieService.resetMovieDetailDisplay()
  }
}

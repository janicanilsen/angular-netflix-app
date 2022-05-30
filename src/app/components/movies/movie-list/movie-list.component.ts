import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies!: Movie[]; //it should be that i get the array depending on the category passed
  @Input() category!: string;
  @Input() viewMode!: string;
  sliderView: string = Constants.SLIDER_VIEW;
  gridView: string = Constants.GRID_VIEW;

  constructor() {}

  ngOnInit(): void {}

}

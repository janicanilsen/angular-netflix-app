export class Constants {
  //config
  public static API_KEY = '498b63b9d2300c67ac8949ed13dcbcfe';
  public static API_CONFIG_URL =
    'https://api.themoviedb.org/3/configuration?api_key=';
  public static PAGE_ONE_REQUEST = '&language=en-US&page=1';

  public static GET_POPULAR_MOVIES_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=' +
    this.API_KEY +
    this.PAGE_ONE_REQUEST;
  public static GET_TOP_RATED_TV_SHOWS_URL =
    'https://api.themoviedb.org/3/tv/top_rated?api_key=' +
    this.API_KEY +
    this.PAGE_ONE_REQUEST;
  public static GET_TOP_RATED_MOVIES_URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
    this.API_KEY +
    this.PAGE_ONE_REQUEST;
  public static GET_POPULAR_TV_SHOWS_URL =
    'https://api.themoviedb.org/3/tv/popular?api_key=' +
    this.API_KEY +
    this.PAGE_ONE_REQUEST;

  //movie categories constants
  public static POPULAR_MOVIES = 'Popular Movies';
  public static TOP_RATED_TV_SHOWS = 'Top Rated TV Shows';
  public static MOVIES = 'Movies';
  public static MY_LIST = 'My List';
  public static TOP_RATED_MOVIES = 'Top Rated Movies';
  public static SEARCH_MATCHES = 'Search matches for ';
  public static ALL_CATEGORIES = 'All Categories';
  public static POPULAR_TV_SHOWS = 'Popular TV Shows';
  public static TV_SHOWS = 'TV Shows';
  public static POPULAR_NOW = 'Popular Now';
  public static TOP_RATED = 'Top Rated';

  //status
  public static PENDING = 'PENDING';
  public static ERROR = 'ERROR';
  public static SUCCESS = 'SUCCESS';

  //UI constants
  public static GRID_VIEW = 'GRID_VIEW';
  public static SLIDER_VIEW = 'SLIDER_VIEW';
}

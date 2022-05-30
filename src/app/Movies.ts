export interface Response {
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[];
}

export interface Movie {
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    vote_count: number;
    vote_average: number;

    //optional: could be null
    title?: string;
    backdrop_path?: string;
    poster_path?: string;

    //optional: TV Show does not have these properties
    adult?: boolean;
    original_title?: string;
    release_date?: string;
    video?: boolean;

    //optional: ONLY TV Show have these properties
    first_air_date?: string;
    origin_country?: string[];
    name?: string;
    original_name?: string;

    //for easy filtering
    category: string;
}

export interface ConfigResponse {
    images: ImageConfig;
    change_keys: string[];
}

export interface ImageConfig {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

export interface MovieCategories {
    POPULAR_MOVIES: string;
    TOP_RATED_TV_SHOWS: string;
    MOVIES?: string;
    MY_LIST?: string;
    TOP_RATED_MOVIES: string;
    SEARCH_MATCHES?: string;
    ALL_CATEGORIES?: string;
    POPULAR_TV_SHOWS: string;
    TV_SHOWS?: string;
    POPULAR_NOW?: string;
    TOP_RATED?: string;
}

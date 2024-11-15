export interface IFetchMoviesList {
  data: IMovie[];
}
export interface IMovie {
  id: number;
  title: string;
  poster: string;
  images: string[3];
  genres: Array<string>;
}
export interface IFetchMoviesGenres {
  data: IGenres[];
}

export interface IGenres {
  id: number;
  name: string;
}

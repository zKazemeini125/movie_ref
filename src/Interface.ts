export interface IFetchResponse<T> {
  data: T[];
}

export interface IMovie {
  id: number;
  title: string;
  poster: string;
  images: string[3];
  genres: Array<string>;
}

export interface IGenres {
  id: number;
  name: string;
}

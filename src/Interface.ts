export  interface IFetchMoviesList {
  data: IMovie[];
}
export interface IMovie {
  id: number;
  title: string;
  poster: string;
  images:string[3]
}

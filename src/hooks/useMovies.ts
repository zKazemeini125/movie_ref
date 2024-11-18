import { IMovie } from "../Interface";
import UseData from "./useData";

const UseMovies = () => UseData<IMovie>("/movies");

export default UseMovies;

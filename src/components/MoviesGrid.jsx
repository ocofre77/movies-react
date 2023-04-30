import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";

export function MoviesGrid() {

    // eslint-disable-next-line no-console
    const [ movies, setMovies ] = useState([]);
    //"/discover/movie"
    useEffect(()=>{
        get("/discover/movie").then( (data) => {
            setMovies(data.results);
        });
    },[]);

    return (
        <ul className={ styles.moviesGrid }>
            { movies.map((movie) => <MovieCard key={movie.id} movie={ movie } />)}
        </ul>);
}
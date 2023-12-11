import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";

export function MoviesGrid() {

    // eslint-disable-next-line no-console
    const [ movies, setMovies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
    //"/discover/movie"
    useEffect(()=>{
        setIsLoading(true);
        get("/discover/movie").then( (data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    },[]);

    if(isLoading)
    {
        return <Spinner />
    }


    return (
        <ul className={ styles.moviesGrid }>
            { movies.map((movie) => <MovieCard key={movie.id} movie={ movie } />)}
        </ul>);
}
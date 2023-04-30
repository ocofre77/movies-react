import { useParams } from "react-router-dom";
//import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MovieDetails(){

    const { movieId } = useParams();
    const { isLoading, setIsLoading } = useState(true); 
    const [movie, setMovie] =useState(null);

    useEffect(()=>{
        get("/movie/" + movieId).then((data)=>{
            setIsLoading(false);
            setMovie(data);
        })
    },[movieId]);

    if(isLoading){
        return <div>Loading...</div>;
    }

    if(!movie){
        return null;
    }

    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
    <div className={ styles.detailsContainer }>
        <img className={`${styles.col} ${styles.movieImage}`} src={ imageURL } alt={ movie.title }></img>
        <div className={`${styles.col} ${styles.MovieDetails}` }>
            <p>
                <strong>Title:</strong> { movie.title}
            </p>
            <p>
                <strong>Genres:</strong>{ " "} 
                { movie.genres.map(genre => genre.name).join(", ") }</p>
            <p>
                <strong>Description:</strong> { movie.overview}
            </p>
        </div>
    </div>);
}
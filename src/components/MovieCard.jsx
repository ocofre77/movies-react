import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie } ){
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;


    return (
    <li className={ styles.movieCard } >
        <Link to={ "/movies/" + movie.id} >
            <img 
            width={ 230}
            height = { 345}
            className={styles.movieImage} 
            src={ imageURL} 
            alt={movie.title} 
            />
            <div>{ movie.title}</div>
        </Link>
    </li>);
}
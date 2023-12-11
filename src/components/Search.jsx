import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
//import { useNavigate } from 'react-router-dom';

export const Search = () => {

    const [searchText, setSearchText ] = useState("");
    //const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        //useNavigate.push("/?Search=" + searchText );
    }

    return (
        <form  className={styles.searchContainer} onSubmit={ handleSubmit } >
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={searchText}
                    onChange={ (e) => setSearchText( e.target.value.toUpperCase() )}
                />
                <button className={styles.searchButton } type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}

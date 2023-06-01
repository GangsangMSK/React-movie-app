import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

export const IMG_BASE_API = "https://image.tmdb.org/t/p/w220_and_h330_face";

export default function Movie(props){
    const navigate = useNavigate();
    const onClickMovieItem = () => {
        navigate(`/movie/${props.id}`, { state: props });
    }

    return (
        <div className={styles.container} onClick={onClickMovieItem}>
            <img src={IMG_BASE_API + props.poster_path} alt={props.title} />
            <div className={styles.info}>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };
        fetchData();
    }, [fetchUrl]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            console.log("Clicked movie:", movie);
            try {
                const url = await movieTrailer(movie?.name || movie?.title || "");
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                } else {
                    console.log("No trailer found for this movie.");
                }
            } catch (error) {
                console.error("Failed to find trailer:", error);
            }
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((movie) => (
                    (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
                        <img
                            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name || movie.title}
                        />
                    ) : null
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;

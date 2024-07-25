import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData()
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '....' : string
    }


    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center top'
        }}>
            <div className='banner-content'>
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.origna_name}</h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner-fade-button' />

        </header>
    )
}

export default Banner
import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Movies.css'

const img_url = 'https://image.tmdb.org/t/p/original/';

function Movie(props) {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.url);
            setMovies(request.data.results);
        }

        fetchData()
    }, [props.url]);

    console.log(Movies);

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="rowPoster">
                { Movies.map((movie => {
                    return (
                        <img src={`${img_url}${movie.poster_path}`}
                        className="img-poster"
                        alt={movie.name}
                        key={movie.id}/>
                    )
                }))     
                }   
                </div>
        </div>
    )
}

export default Movie;
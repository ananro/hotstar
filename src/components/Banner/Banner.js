import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css';


function Banner() {
        const [movie, setMovie] = useState()
        useEffect(() => {
          axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data.results[0])
              setMovie(response.data.results[9])
          })

        }, [])

         return(
             
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            <a href="" className="an">
           <div className="sub-banner">
            <div>
                <h1 className="title">{movie ? movie.name : ""}</h1>
                <h2 className="twocat">{movie ? movie.media_type :""}</h2>      
                <p className="description">{movie ? movie.overview : ""}</p>
            </div>
            </div>
            </a>
        </div>
        
    )
}

export default Banner

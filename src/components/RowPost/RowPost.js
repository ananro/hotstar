import React,{useEffect,useState} from "react";
import './RowPost.css';
import { API_KEY ,imageUrl} from "../../Constants/Constants";
import axios from '../../axios';


function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    
                    <img src={`${imageUrl+obj.backdrop_path}`} className="poster"></img>

                )}

                
        
            </div>
        </div>
    )
}

export default RowPost


import { useEffect, useState } from "react"
import axios from '../axios'
import './Row.css'
import { useNavigate } from "react-router-dom"


const Row = ({title,fetchUrl,islargeRow}) => {
  const navigate = useNavigate();
  
    const[movie,setMovie]=useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
      {movie.map((movie)=>{
       return(
        <img key={movie.id}
        className={`row__poster  ${islargeRow && "row__posterLarge"} `}
         src={`${baseUrl}${islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title} onClick={()=>{navigate('/movie',{state:{movie}})}}></img>
       )
      })}
      </div>
    </div>
  )
}

export default Row

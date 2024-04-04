import axios from '../axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Cast.css'


const Cast = () => {
    const {castId,castName} =useParams()
    const [castDtl,setCastDtl]=useState([]);
    const navigate = useNavigate()

    const baseUrl = "https://image.tmdb.org/t/p/original/"



    useEffect(()=>{
        async function fetchCastDetails(){
            const getData=await axios.get(`https://api.themoviedb.org/3/search/person?api_key=ab1da08307f82007e9975d4dccf67670&query=${castName}`)
            setCastDtl(getData.data.results)
            console.log(getData)
        }
        fetchCastDetails()

    },[castId])


  return (
    <div className='cast'>
      {castDtl.slice(0,1).map((x)=>{
        return(
           <div className='cast_Container' key={x.id}>
             <div className='cast_img'>
             <img src={`${baseUrl}${x.profile_path}`} alt=""></img>
             </div>
             <div className='cast_Contents'>
                <h1><span style={{color:'grey'}}>Name</span>:{x.name}</h1>
                <p><span style={{color:'grey'}}>Occupation</span>:{x.known_for_department}</p>
             </div>
           </div>
        )
      })}
      <div className='Cast_movie'>
      {
                castDtl.map((movie,i)=>{
                    return(
                        <div key={movie.id}>
                        <img alt='' onClick={()=>navigate('/movie')} src={`${baseUrl}${movie.known_for[i].poster_path}`} style={{width:"250px",height:"250px"}} />
                        <p>{movie.original_title || movie.name || movie.title}</p>
                        <p>{movie.vote_average}🌟</p>
                        </div>
                    )
                })
             }
      </div>
    </div>
  )
}

export default Cast

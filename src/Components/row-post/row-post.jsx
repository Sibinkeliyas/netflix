import React, { useEffect,useState } from 'react'
import './rowPost.css'
import axios from '../../axios'
import {imageUrl ,API_KEY} from '../../Constants/constant'
import YouTube  from 'react-youtube'

function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [movieUrl,setMovieUrl] = useState()
  useEffect(() => {
    axios.get(props.url).then((responce) => {
      setMovie(responce.data.results)
    })
  })
  
  const opt = {
    heigt : '3900',
    width : '100%',
    playervars : {
      autoPlay : 0
    },
    
  }
  const handleMovieTrailer = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if(response.data.results.length !== 0){
        console.log("hlelo");
        console.log(response.data.results[0]);
        setMovieUrl (response.data.results[0])
      } 
             
    })
    
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movie.map((obj) => {
            return (
              <img onClick={() => {
                handleMovieTrailer(obj.id)
              }} className={props.isSmall ? 'small-poster' : 'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
          })
        }
      </div>
      {movieUrl &&  <YouTube opts={opt} videoId={movieUrl.key}/>}
    </div>
  )
}

export default RowPost

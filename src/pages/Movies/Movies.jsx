import { Input } from 'antd';
import React from 'react'
import { useEffect, useState } from 'react';
import { URL } from '../../constants/Endpoints';
import './movies.css'
import { MoviesGrid } from './moviesGrid/MoviesGrid';



export const Movies = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  // const URL = 'http://api.tvmaze.com/search/shows?q=star%20wars'
  const fetchApi = async () => {
    const response = await fetch(URL)
    const responseJSON = await response.json()
    setMovies(responseJSON)
    const MovI = responseJSON.map(item => {
      return console.log(item.show.image)
    })
    
  }


  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>

      <div className='contInp'>
        <Input className='search' placeholder='Buscar películas'></Input>
      </div>
      <div className='title'>
        <h1 className='titleh1'>Películas</h1>
      </div>
      <main className='contentCards'>
        {movies.map((movie) => (
          <MoviesGrid key={movie.id} movie={movie} />
        ))}

      </main>



    </>
  )
}

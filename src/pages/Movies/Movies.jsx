import { Input } from 'antd';
import React from 'react'
import { useEffect, useState } from 'react';
import { URL } from '../../constants/Endpoints';
import './movies.css'
import { MoviesGrid } from './moviesGrid/MoviesGrid';
import InfiniteScroll from 'react-infinite-scroll-component'



export const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const URL = 'http://api.tvmaze.com/search/shows?q=star%20wars'
  const fetchApi = async () => {
    const response = await fetch(URL)
    const responseJSON = await response.json()
    setMovies(responseJSON)
    console.log(responseJSON)
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

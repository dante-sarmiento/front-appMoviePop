import {  Card, Input } from 'antd'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import './movies.css'
import { MoviesGrid } from './moviesGrid/MoviesGrid';


export const Movies = () => {
  const [movies, setMovies] = useState([]);

  // async function loadMovies() {
  //   const res = await axios.get(`http://api.tvmaze.com/search/shows?q=star%20wars.`);
  //   res.data.map(item => console.log(item.show));
  //   const moviesDb = res.data.map(item => <li>{item.show.id}</li>);
  //   console.log(moviesDb)
    
  // }
  // useEffect(() => {
  //   loadMovies();
  // }, []);

  return (
    <>
      <div className='contInp'>
        <Input placeholder="Buscar Películas" className='search' />
      </div>
      <div className='title'>
        <h1 className='titleh1'>Películas</h1>
      </div>
      <main>
      <MoviesGrid />
      </main>
      

    </>
  )
}

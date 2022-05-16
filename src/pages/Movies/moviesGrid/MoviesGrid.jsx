import { Card} from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./moviesGrid.css"


export const MoviesGrid = (movie) => {

  return (
    <div>
      <ul className="moviesGrid">
            <Link className='link' to={'/moviesDetails/' + movie.movie.show.id}>
              <Card key={movie.movie.show.id}
                className='card-container' bordered={false}>
                <img src={movie.movie.show.image.medium} alt="" />
                <div className='card-info'>
                  <h3 className='titulo'>{movie.movie.show.name}</h3>
                </div>
              </Card>
            </Link>
      </ul>
    </div>
  )
}


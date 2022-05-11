import { Card} from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./moviesGrid.css"


export const MoviesGrid = () => {
  const [movies, setMovies] = useState()

  const URL = 'http://api.tvmaze.com/search/shows?q=star%20wars'
  const fetchApi = async () => {
    const response = await fetch(URL)
    console.log(response.status)
    const responseJSON = await response.json()
    setMovies(responseJSON)
    console.log(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      <ul className="moviesGrid">
        {!movies ? 'Cargando películas...' :
          movies.map((movie, index) => (
            <Link className='link' to={"/movies/" + movie.show.id}  >
              <Card key={movie.show.id}
                className='card-container' bordered={false}>
                <img src={movie.show.image.medium} alt="" />
                <div className='card-info'>
                  <h3 className='titulo'>{movie.show.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
      </ul>
    </div>
  )
}


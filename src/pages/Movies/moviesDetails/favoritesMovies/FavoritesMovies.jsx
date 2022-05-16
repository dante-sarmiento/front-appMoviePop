import { Button, Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URLFromDb } from '../../../../constants/Endpoints'
import './favorites.css'

export const FavoritesMovies = () => {
    const [favMovies, setFavMovies] = useState([])
    const [ moviesFavo, setMoviesFavo ] = useState([])
    const [ MovieDel, setMovieDel ] = useState([])
    const userLS = JSON.parse(localStorage.getItem("currentUser"))
    // console.log(userLS)
    // console.log(moviesFavo);

    const getFavorites = async () => {
        try {
            const datFromDb = await axios.get(`${URLFromDb}/favorites`)
            const favoritesFromDb = datFromDb.data.favorites;
            setMovieDel(favoritesFromDb)
            // console.log(favoritesFromDb)
            const favoritesFilter = favoritesFromDb.filter(item => item.user._id == userLS._id)
            // console.log(favoritesFilter);
            const moviesToRender = favoritesFilter.map(item => ({
                movieId: item.movieId
            }
            ))
            // console.log(moviesToRender)
            setMoviesFavo(moviesToRender)
            
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <>
            <div className='contTitle'>
                <h1 className='titl'>Mis películas favoritas</h1>
            </div>
                <div className='contLi'>
                    <ul className='moviesLi'>
                        {moviesFavo.map((item) => (
                            <div className='divCard'>
                                <Card key={item.movieId.id}
                                    bordered={false}>
                                    <img src={item.movieId.image.medium} alt="" />
                                    <div className='card-info'>
                                        <h3 className='titulo'>{item.movieId.name}</h3>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </ul>


                </div>
        </>
    )
}

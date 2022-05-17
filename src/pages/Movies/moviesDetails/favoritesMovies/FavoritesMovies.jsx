import { Button, Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './favorites.css'

const URLFromDb = process.env.REACT_APP_API_URL;

export const FavoritesMovies = () => {
    const [ moviesFavo, setMoviesFavo ] = useState([])
    const [ MovieDel, setMovieDel ] = useState([])
    const userLS = JSON.parse(localStorage.getItem("currentUser"))
    // console.log(userLS)


    const getFavorites = async () => {
        try {
            const datFromDb = await axios.get(`${URLFromDb}/favorites`)
            const favoritesFromDb = datFromDb.data.favorites;
            setMovieDel(favoritesFromDb)
            // console.log(favoritesFromDb)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteFav = async (id) => {
        console.log(id);
        try{
            let movDE = MovieDel.find(item => item._id === id)
            console.log(movDE);
            const deleteMovie = await axios.delete(`${URLFromDb}/favorites/${id}`);
            console.log(deleteMovie);
            const d = MovieDel.filter(item => item._id !== id)
            console.log(d);
            setMoviesFavo(d)
            window.location.reload()
        }
        catch(error){
            console.log(error);
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
                        {MovieDel.map((item) => (
                            <div className='divCard'>
                                <Card key={item.movieId.id}
                                    bordered={false}>
                                    <img src={item.movieId.image.medium} alt="" />
                                    <div className='card-info'>
                                        <h3 className='titulo'>{item.movieId.name}</h3>
                                    </div>
                                    <Button type='primary'  onClick={()=> deleteFav(item._id)}>eliminar de favoritas</Button>
                                </Card>
                            </div>
                        ))}
                    </ul>


                </div>
        </>
    )
}





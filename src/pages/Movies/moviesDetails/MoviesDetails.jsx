import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Comment, Form, Input } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movieDetails.css'
import { URL, URLFromDb } from '../../../constants/Endpoints';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState();
  const [ movies, setMovies ] = useState([])
  const [movieId, setMovieid] = useState();
  const [coments, setComents] = useState([]);
  const userLS = JSON.parse(localStorage.getItem("currentUser"))

  const { movieID } = useParams()


  // const URL = 'http://api.tvmaze.com/search/shows?q=star%20wars'
  const fetchApp = async () => {
    const movies = await axios.get(URL)
    setMovies(movies)
    const selectedMovie = movies.data.find(movie => {
      return movie.show.id == movieID
    })
    setMovie(selectedMovie.show)
    setMovieid(selectedMovie.show.id)

  }

  

  // COMENTARIOS //
  const postComents = async (FormData) => {
    const personalComment = {
      user: userLS,
      movieID,
      coment: FormData
    }
    try {
      const { data } = await axios.post(`${URLFromDb}/coments`, personalComment)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const getComents = async () => {
    try {
      const dataFromDB = await axios.get(`${URLFromDb}/coments`)
      const comentsFromDb = dataFromDB.data.comentarios;
      const comentsFilter = comentsFromDb.filter(item => item.movieID == movieID)
      const comentsToRender = comentsFilter.map(item => ({
        coment: item.coment.coment,
        user: item.user.fullName
      }
      ))
      setComents(comentsToRender)

  
    }
    catch (error) {
      console.log(error)
    }
  }

  // AGREGAR A FAVORITAS //
  const addFavorites = async (movie) => {
    const favData = {
      user: userLS,
      movieId: movie
    }
    try {
      const addFav = await axios.post(`${URLFromDb}/favorites`, favData)
      alert('se ha añadido a favoritos')
    }
    catch (error) {
      console.log(error)
     }
  }


  useEffect(() => {
    fetchApp()
    getComents()
  }, [])
  const reload = () => {
    window.location.reload()
  }


  return (
    <>
      <div className='imgTitle'>
        <img className='imag p-10' src={movie?.image.original} alt={movie?.name} />
        <h1>{movie?.name}</h1>
      </div>
      <div className='details'>
        <h4><b className='b'><i>Idioma: </i></b> {movie?.language}</h4>
        <h4><b className='b'><i>Genero: </i></b> {movie?.genres}</h4>
        <h4><b className='b'><i>Estreno: </i></b> {movie?.premiered}</h4>
        <div>
          <Button type='secondary' className='favoriteBtn' onClick={() => addFavorites(movie)}>Añadir a favoritos</Button>
        </div>
        <div>
          {/* <Button type='secondary' className='favoriteBtn' onClick={() => deleteFavorites(movie.id)}>Eliminar de Favoritos</Button> */}
        </div>
      </div>
      <div className='text'>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quia earum consequatur? Dolore, odit eligendi impedit nam provident, saepe dignissimos delectus excepturi cumque, deleniti commodi! Dolores est voluptates eveniet tempora?
          Accusantium recusandae suscipit tempora ad totam commodi repudiandae odit possimus ab? Quae, esse ipsam ducimus eligendi animi nulla, pariatur in iure, fuga tenetur sapiente autem. Numquam dicta adipisci voluptates et!</h5>
      </div>
      <div>
        <div className='comentsCont'>
          <h1>Comentarios</h1>
          {coments.map((item) => (
            // <li key={item.coment.id}>{item.user}{item.coment}</li>
            <div className='coments'>
            <Comment
              author={item.user}
              key={item.coment.id}
              avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}/>}
              content={
                <p>{item.coment}</p>
              }
            />
            </div>
          ))}
        </div>
        <Form
          name="Coments"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={postComents}
          autoComplete="off"
        >
          
          <Form.Item
          className='formItem'
            label="Realizar comentario"
            name="coment"
            rules={[{ message: "ingrese un comentario" }]}
          >
            <Input className='inputComent' placeholder='comentar...' maxLength={120} />
          </Form.Item>
          <Form.Item
          className='FormBtn'
            wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={reload} className="btns" type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>

        </Form>
      </div>
      <Footer>
        <div>
          <br />
        </div>
      </Footer>

      <div>
        {/* <MoviesComents movieId={movieId} /> */}


      </div>

    </>
  )
}

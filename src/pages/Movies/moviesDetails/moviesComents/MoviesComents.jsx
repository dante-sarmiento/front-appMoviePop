import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Comment, Form, Input } from 'antd'
import axios from 'axios'
import { Comentarios } from './comentarios/Comentarios'
import React, { useEffect, useState } from 'react'
import './moviesComents.css'
import Item from 'antd/lib/list/Item'
import { useParams } from 'react-router-dom'
import { URLFromDb } from '../../../../constants/Endpoints'



export const MoviesComents = (movieId ) => {
  const [ coments, setComents ] = useState([]);


  //extraigo el current user para comparar su ID
  const userLS = JSON.parse(localStorage.getItem("currentUser"))
  // console.log(userLS._id)
  const postComents = async (FormData) => {
    const personalComment = {
      user: userLS,
      movieID: movieId.movieId,
      coment: FormData
    }
    try {
      const { data } = await axios.post(`${URLFromDb}/coments`, personalComment)
      console.log(data)
    }
    catch (error) {
      // console.log(error)
    }
  }

  const getComents = async () => {
    try {
      const dataFromDB = await axios.get(`${URLFromDb}/coments`)
      const comentsFromDb = dataFromDB.data.comentarios;
      const comentsFilter = comentsFromDb.filter(item => item.movieID == movieId.movieId)
      const comentsToRender = comentsFilter.map(item => ({
        coment: item.coment.coment
      }
      ))
      console.log(comentsToRender)
      setComents(comentsToRender)
      // setComents(comentsToRender)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() =>{
    getComents()
  }, [])

  return (
    <>
      <div>
        <div>
          {coments.map((item) => (
            <li key={item.coment.id}>{item.coment}</li>
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
            label="Realizar comentario"
            name="coment"
            rules={[{ message: "ingrese un comentario" }]}
          >
            <Input maxLength={120} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="btns" type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>

        </Form>
      </div>
    </>
  )
}

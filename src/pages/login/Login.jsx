import { Button, Col, Form, Input } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from './register/Register';
import './login.css';
// import { URLFromDb } from '../../constants/Endpoints';

const URLFromDb = process.env.REACT_APP_API_URL;


export const Login = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("userToken")));


    const navigate = useNavigate();

    const onLogin = async (loginData) => {
        try {
            const login = await axios.post(`${URLFromDb}/login`, loginData);
            localStorage.setItem('userToken', JSON.stringify(login.data.token));
            setToken(login.data.token)
            setUser(login.data.user)
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
    }, [])

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(user))
    }, [user]);




    return (
        <>
            <div className='LoginCont'>
                {/* REGISTRO  */}
                <div className='containers'>
                    <Register />
                </div>


                {/* LOGIN  */}
                <div className='containers'>
                    <Col xs={24} lg={12} offset={6}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 10,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onLogin}
                            autoComplete="off"
                        >
                            <h1>Iniciar Sesión</h1>
                            <Form.Item
                            className='inps'
                                label="Email"
                                name="email"
                                initialValue="dante@dante.com"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Coloque un email correcto',
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input maxLength={30} />
                            </Form.Item>

                            <Form.Item
                            className='inps'
                                label="Password"
                                name="password"
                                initialValue="administrador"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password maxLength={30} />
                            </Form.Item>

                            <Form.Item
                            className='itemBtn'
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className='btns' type="primary" htmlType="submit">
                                    Iniciar Sesión
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </div>
            </div>
        </>
    )
}


import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import React from "react";
// import { URLFromDb } from "../../../constants/Endpoints";

const URLFromDb = process.env.REACT_APP_API_UR;

export const Register = () => {

    const validationOn = true;

    const registerUser = async (formData) => {
        try {
            const { data } = await axios.post(`${URLFromDb}/user`, formData)
            alert("usuario creado exitosamente")
            
        } catch (err) {
            console.log(err);
        }
    }
    const onSubmit = ( e ) => {
        e.target.reset()
    }
    
    return (
        <>
            <Form
                name="Register"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={registerUser}
                autoComplete="off"
            >
                <h1>Registrarse</h1>
                <Form.Item
                    label="Nombre Completo"
                    name={"fullName"}
                    rules={[{ required: validationOn, message: "Ingrese un nombre válido!" }]}
                >
                    <Input maxLength={30} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name={"email"}
                    rules={[{ required: validationOn, message: "Ingrese un email válido!" }]}
                >
                    <Input maxLength={30} />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name={"password"}
                    rules={[{ required: validationOn, message: "Ingrese una contraseña!" }]}
                >
                    <Input.Password maxLength={30} />
                </Form.Item>

                <Form.Item className="itemBtn" wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className="btns" type="primary" onSubmit={onSubmit} htmlType="submit">
                        Registrarse
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

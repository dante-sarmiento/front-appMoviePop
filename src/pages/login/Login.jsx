import { Button, Col, Form, Input } from 'antd'
import axios from 'axios'


export const Login = () => {
    const onLogin = async (loginData) => {
        try{
            console.log(loginData)
            const login = await axios.post(`localhost:3100/api/login`, loginData);
            console.log(login.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
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
                        <Form.Item
                            label="Email"
                            name="email"
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
                            label="Password"
                            name="password"
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
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </div>

        </>
    )
}

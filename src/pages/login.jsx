import { Button, Form, Input, notification } from "antd";
import { loginUserAPI } from "../services/api.services";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const { setUser } = useContext(AuthContext);
    const [isDone, setIsDone] = useState(false)
    const onFinish = async (values) => {
        // return (
        console.log(values)
        setIsDone(true)
        const res = await loginUserAPI()
        if (res && res.data) {
            setIsDone(false)
            if (res.data.email === values.email && res.data.password === values.password) {
                localStorage.setItem('access_token', 'accesstoken123456')
                setUser(res.data)
                console.log('test login', res.data)
                notification.success({
                    message: 'Login User',
                    description: 'Đăng nhập user thành công'
                })
            } else {
                notification.error({
                    message: 'Login User',
                    description: 'Sai Username hoặc Password'
                })
            }
        }
        // )
    }
    const [form] = Form.useForm();
    return (
        <div>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <div className="user-form" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ fontWeight: "bold", fontSize: "20px" }}>Login</div>
                </div>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <div>
                    {/* <button type="submit">Register</button> */}
                    <Button loading={isDone}
                        type="primary" onClick={() => form.submit()}>Register</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage;
import { Button, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api.services";

const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        // return (
        console.log(values)
        const res = await registerUserAPI(values.fullName, values.email, values.password, values.phone)
        if (res && res.data) {
            notification.success({
                message: 'Register User',
                description: 'Đăng kí user thành công'
            })
        } else {
            notification.error({
                message: 'Register User',
                description: JSON.stringify(res.message)
            })
        }
        // )
    }
    return (
        <div>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <div className="user-form" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ fontWeight: "bold", fontSize: "20px" }}>Register</div>
                </div>
                <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
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
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{
                        // required: true,
                        pattern: new RegExp(/\d+/g),
                        message: "Wrong format!"
                    }]}
                >
                    <Input />
                </Form.Item>
                <div>
                    {/* <button type="submit">Register</button> */}
                    <Button type="primary" onClick={() => form.submit()}>Register</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage;
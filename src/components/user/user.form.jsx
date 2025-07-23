import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.services";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickUser = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res && res.data) {
            notification.success({
                message: 'Create User',
                description: 'Tạo mới user thành công'
            })
        }
    }
    return (
        <div className="user-form" style={{ margin: "20px auto", width: "500px", display: "flex", gap: "10px", flexDirection: "column" }}>
            <div>
                <span>Fullname</span>
                <Input style={{ height: "30px" }} value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                <span>Email</span>
                <Input style={{ height: "30px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <span>Password</span>
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <span>Phone Number</span>
                <Input style={{ height: "30px" }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <Button type="primary" onClick={handleClickUser}>Create User</Button>
            </div>
        </div>
    )
}

export default UserForm;
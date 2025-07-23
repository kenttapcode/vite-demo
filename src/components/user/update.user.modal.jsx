import { useState } from "react";
import { createUserAPI } from "../../services/api.services";
import { Button, Input, notification } from "antd";
import Modal from "antd/es/modal/Modal";

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true)
    const handleClickUser = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res && res.data) {
            notification.success({
                message: 'Create User',
                description: 'Tạo mới user thành công'
            })
        }
        resetCloseModal()
        await loadUser();

    }

    const resetCloseModal = () => {
        setIsModalOpen(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setPhone('')

    }
    return (
        <Modal title="Update User" okText="Save" open={isModalOpen} onOk={handleClickUser}
            onCancel={() => resetCloseModal()}>
            <div>
                <span>Fullname</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                <span>Email</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <span>Password</span>
                <Input.Password style={{ height: "30px", marginBottom: "10px" }} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <span>Phone Number</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
        </Modal>
    )
}

export default UpdateUserModal;
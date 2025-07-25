import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.services";
import { Button, Input, notification } from "antd";
import Modal from "antd/es/modal/Modal";

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setID] = useState("");

    const { isModalUpdate, setIsModalUpdate, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        console.log("check effect", dataUpdate)
        if (dataUpdate) {
            setFullName(dataUpdate.fullName)
            setEmail(dataUpdate.email)
            setPassword(dataUpdate.password)
            setPhone(dataUpdate.phone)
            setID(dataUpdate.id)
        }
    }, [dataUpdate])

    const handleClickUser = async () => {
        const res = await updateUserAPI(id, fullName, email, password, phone);
        if (res && res.data) {
            notification.success({
                message: 'Update User',
                description: 'Cập nhật user thành công'
            })
        }
        resetCloseModal()
        await loadUser();

    }

    const resetCloseModal = () => {
        setIsModalUpdate(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setDataUpdate(null)

    }
    return (
        <Modal title="Update User" okText="Save" open={isModalUpdate} onOk={handleClickUser}
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
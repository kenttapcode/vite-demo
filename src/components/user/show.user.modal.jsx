import { useEffect, useState } from "react";
import { Button, Input, notification } from "antd";
import Modal from "antd/es/modal/Modal";

const ShowUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setID] = useState("");


    const { isModalShow, setIsModalShow, dataUserShow, setDataUserShow } = props;

    useEffect(() => {
        if (dataUserShow) {
            console.log('data show in show modal', dataUserShow.fullName)
            setFullName(dataUserShow.fullName)
            setEmail(dataUserShow.email)
            setPassword(dataUserShow.password)
            setPhone(dataUserShow.phone)
            setID(dataUserShow.id)


        }
    }, [dataUserShow])



    const resetCloseModal = () => {
        setIsModalShow(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setDataUserShow(null)

    }
    return (
        <Modal title="Show User" cancelText="Close" okText='OK' open={isModalShow} onCancel={() => resetCloseModal()} onOk={() => resetCloseModal()}>
            <div>
                <span>ID</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={id} disabled />
            </div>
            <div>
                <span>Fullname</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={fullName} disabled />
            </div>
            <div>
                <span>Email</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={email} disabled />
            </div>
            <div>
                <span>Password</span>
                <Input.Password style={{ height: "30px", marginBottom: "10px" }} value={password} disabled />
            </div>
            <div>
                <span>Phone Number</span>
                <Input style={{ height: "30px", marginBottom: "10px" }} value={phone} disabled />
            </div>
        </Modal>
    )
}

export default ShowUserModal;
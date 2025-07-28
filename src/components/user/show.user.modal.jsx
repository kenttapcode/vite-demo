import { useEffect, useState } from "react";
import { Button, Input, notification } from "antd";
import Modal from "antd/es/modal/Modal";

const ShowUserModal = (props) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setID] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)



    const { isModalShow, setIsModalShow, dataUserShow, setDataUserShow } = props;

    useEffect(() => {
        if (dataUserShow) {
            console.log('data show in show modal', dataUserShow.fullName)
            setFullName(dataUserShow.fullName)
            setEmail(dataUserShow.email)
            setPassword(dataUserShow.password)
            setPhone(dataUserShow.phone)
            setID(dataUserShow.id)
            setUserAvatar(dataUserShow.avatar)


        }
    }, [dataUserShow])



    const resetCloseModal = () => {
        setIsModalShow(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setDataUserShow(null)
        setUserAvatar('')

    }

    const handleUploadFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null)
            return
        }

        const file = e.target.files[0]
        console.log(file)
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }
    return (
        <Modal title="Show User" cancelText="Close" okText='OK' open={isModalShow} onCancel={() => resetCloseModal()} onOk={() => resetCloseModal()}>
            <div style={{ marginBottom: '20px' }}>
                <img style={{ display: "block", margin: "0 auto 10px", width: "300px" }} src={userAvatar} />
                <div>
                    <label style={{
                        background: "orange",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }} htmlFor="btnUpload"
                    >Upload File</label>
                    <input type="file" hidden id='btnUpload'
                        onChange={(e) => handleUploadFile(e)} />
                </div>
                {preview &&
                    <div>
                        <img style={{ display: "block", margin: "10px 0", width: "100px" }} src={preview} />
                    </div>
                }
            </div>
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
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useEffect, useState } from 'react';
import { showUserAPI } from "../../services/api.services";
import ShowUserModal from './show.user.modal';
import { deleteUserAPI } from '../../services/api.services';

const UserTable = (props) => {
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const [isModalShow, setIsModalShow] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const { dataUsers, loadUser } = props;

    const [dataUserShow, setDataUserShow] = useState(null);

    const handleClickShow = async (id) => {
        const res = await showUserAPI(id);
        setDataUserShow(res.data)
        console.log("load data show", dataUserShow)
        setIsModalShow(true)
    }

    const handleClickDelete = async (id) => {
        const res = await deleteUserAPI(id);
        if (res && res.data) {
            notification.success({
                message: 'Delete User',
                description: 'Xoá user thành công'
            })
        }
        console.log("delete USER", id)
    }

    useEffect(() => { loadUser() }, [dataUsers]);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => { return (<a onClick={() => { handleClickShow(text) }}>{text}</a>) },
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><EditOutlined onClick={() => {
                        setDataUpdate(record)
                        setIsModalUpdate(true)
                    }
                    } /></a>
                    <a><DeleteOutlined onClick={() => handleClickDelete(record.id)} /></a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} />
            <UpdateUserModal isModalUpdate={isModalUpdate} setIsModalUpdate={setIsModalUpdate} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} loadUser={loadUser} />
            <ShowUserModal isModalShow={isModalShow} setIsModalShow={setIsModalShow} dataUserShow={dataUserShow} setDataUserShow={setDataUserShow} handleClickShow={handleClickShow} />
        </>
    )
}

export default UserTable;
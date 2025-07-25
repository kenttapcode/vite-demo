import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useEffect, useState } from 'react';
import { showUserAPI } from "../../services/api.services";
import ShowUserModal from './show.user.modal';

const UserTable = (props) => {
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const [isModalShow, setIsModalShow] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const { dataUsers, loadUser } = props;

    const [dataUserShow, setDataUserShow] = useState(null);

    const handleClickShow = async (text) => {
        const res = await showUserAPI(text);
        setDataUserShow(res.data)
        console.log("load data show", dataUserShow)
        setIsModalShow(true)
    }

    // useEffect(() => { handleClickShow() }, [dataUserShow]);
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
                    <a><DeleteOutlined /></a>
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
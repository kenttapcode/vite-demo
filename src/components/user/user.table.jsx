import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';

const UserTable = (props) => {
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const { dataUsers, loadUser } = props;
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
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
        </>
    )
}

export default UserTable;
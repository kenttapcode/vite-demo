import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';

const UserTable = (props) => {
    const { dataUsers } = props;
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
                    <a><EditOutlined /></a>
                    <a><DeleteOutlined /></a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} />
            <UpdateUserModal />
        </>
    )
}

export default UserTable;
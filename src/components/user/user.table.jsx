import { Space, Table, Tag } from 'antd';
import { FetchAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([]);

    const loadUser = async () => {
        const res = await FetchAllUserAPI();
        setDataUsers(res.data)
    }

    useEffect(() => { loadUser() }, [dataUsers]);

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
    ];


    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable;
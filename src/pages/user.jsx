import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { FetchAllUserAPI } from '../services/api.services';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const [loadingTable, setLoadingTable] = useState(false)
    const loadUser = async () => {
        setLoadingTable(true)
        const res = await FetchAllUserAPI();
        setDataUsers(res.data)
        setLoadingTable(false)
        console.log("load data")
    }

    useEffect(() => { loadUser() }, []);
    return (
        <div style={{ margin: "15px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} loadUser={loadUser} loadingTable={loadingTable} />
        </div>
    )
}

export default UserPage;
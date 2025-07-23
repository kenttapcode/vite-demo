import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";

const UserPage = () => {
    return (
        <div style={{ margin: "15px" }}>
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UserPage;
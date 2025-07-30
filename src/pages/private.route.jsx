import { Button, Result } from "antd";
import { Link, Navigate } from "react-router-dom";

const PriveRoute = (props) => {

    if (localStorage.getItem('access_token') === 'accesstoken123456') {
        return (
            <>{props.children}</>
        )
    } else {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Link to='/login'><Button type="primary">Login</Button></Link>}
            />
        )
    }

}

export default PriveRoute;
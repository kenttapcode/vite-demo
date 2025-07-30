import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, BookOutlined, UserAddOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log('test header', user)
    console.log(user)
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <NavLink class="active" to="/">Home</NavLink>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <NavLink to="/users">Users</NavLink>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <NavLink to="/books">Book</NavLink>,
            key: 'book',
            icon: <BookOutlined />,
        },
        ...(!localStorage.getItem('access_token') ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(localStorage.getItem('access_token') === 'accesstoken123456' ? [{
            label: `Welcome ${localStorage.getItem('username')}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <p onClick={() => { localStorage.removeItem('access_token') }}>Đăng xuất</p>,
                    key: 'logout',
                },
            ],
        }] : []),
    ];
    return (
        // <ul>
        //     <li><NavLink class="active" to="/">Home</NavLink></li>
        //     <li><NavLink to="/books">Book</NavLink></li>
        //     <li><NavLink to="/users">Users</NavLink></li>
        // </ul>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;
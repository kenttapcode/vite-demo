import { NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const Header = () => {
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
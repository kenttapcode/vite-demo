import { createContext, useState } from 'react';

export const AuthContext = createContext({
    email: '',
    fullName: '',
    phone: '',
    avatar: '',
    id: '',
    password: ''
});

export const WrapUser = (props) => {
    const [user, setUser] = useState({
        email: '',
        fullName: '',
        phone: '',
        avatar: '',
        id: '',
        password: ''
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )

}
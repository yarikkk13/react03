import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'
import axiosInstance from '../../services/api';

export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);
    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
    }, [])
    const search = (id) => {
        let foundUser = users.find(value => value.id === id);
        setSingleUser(foundUser)
    };
    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {
                    singleUser ? (<h2>{singleUser.id} - {singleUser.username}</h2>) : (<div>user not defined</div>)
                }
            </div>

        </div>
    );
}

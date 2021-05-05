import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'

export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
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
                    singleUser? (<h2>{singleUser.id} - {singleUser.username}</h2>) : (<div>user not defined</div>)
                }
            </div>

        </div>
    );
}

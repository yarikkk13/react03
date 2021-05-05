import {useEffect, useState} from "react";
import axiosInsta from '../../services/api';

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInsta.get('/posts')
    }, [])
    return (
        <div>

        </div>
    );
}

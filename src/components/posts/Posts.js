import {useEffect, useState} from "react";
import axiosInsta from '../../services/api';
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [selectedPost, setSelected] = useState(null)
    useEffect(() => {
        axiosInsta.get('/posts').then(value => setPosts([...value.data]))
    }, []);
    const searchPost = (id) => {
        let foundPost = posts.find(value => value.id === id);
        setSelected(foundPost)
    }
    return (
        <div className={'bigDiv'}>
            <div className={'posts'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        searchPost={searchPost}/>)
                }
            </div>
            <div className={'post-description'}>
                {
                    selectedPost ? (<div><h2>{selectedPost.title}</h2><div><p>{selectedPost.body}</p></div></div>) : (
                        <div> post not defined </div>)
                }
            </div>

        </div>
    );
}

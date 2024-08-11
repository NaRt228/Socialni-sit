import React from 'react'
import c from './MyPost.module.css'
import Post from './Post/Post'
export interface MyPostProps {
    message: string
    like: number
}

function MyPost() {
    return (
        <div>
            My posts
            <Post message="Hello there" like={20}/>
            <Post message="Hello, it's my first post" like={10}/>
        </div>
    )
}

export default MyPost
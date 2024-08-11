import React from 'react'
import c from './Post.module.css'
import { MyPostProps } from '../MyPost'
function Post(props:MyPostProps) {
  return (
    <div className={c.item}>
        <img src='https://avatarfiles.alphacoders.com/372/372691.png'></img>
        <div className={c.post}>
            <p className={c.descr}>{props.message}</p>
            <p className={c.like}>{props.like} likes</p>
        </div>
    </div>
  )
}

export default Post
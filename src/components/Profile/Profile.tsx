import React from 'react'
import c from './Profile.module.css'
import MyPost from './MyPost/MyPost'
function Profile() {
    return (
        <section>
            <div className={c.imgSection}>
                <img src='https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg'></img>
            </div>
            <MyPost />
        </section>
    )
}

export default Profile
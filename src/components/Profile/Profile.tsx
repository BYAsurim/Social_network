import React from "react";
import Post from "./Posts/Post";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU"
          alt=""
        />
        <div className={s.item}>Ava + description</div>
        <div className={s.item}>My posts</div>
      </div>
      <Post message={'I like it!'} likeCounts={30}/>
      <Post message = {'This is my first post'} likeCounts={10}/>
      <Post message={'Amazing! ! !'} likeCounts={11} />
    </div>
  );
};

export default Profile;

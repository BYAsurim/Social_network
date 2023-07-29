import React from 'react';
import s from "./ProfileInfo.module.css";


type ProfileInfoPropsType = {

}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU"
                alt=""
            />
            <div className={s.descriptionBlock}>Ava + description</div>
        </div>
    );
};

export default ProfileInfo;
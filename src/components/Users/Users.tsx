import React from 'react';
import {UsersPropsType} from "./UsersConteiner";



const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
    return (
        <div>
            Users page
            {}
        </div>
    );
};

export default Users;
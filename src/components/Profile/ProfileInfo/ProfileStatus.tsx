import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
}
export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({
                                                                    status
                                                                }) => {
    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState('')
    const changeEditModeHandler = () => {
        setEditMode(!editMode)
    }
    const changeStatusText = (e:ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                    ? <span onDoubleClick={changeEditModeHandler}>{statusText || status}</span>
                    : <input type="text" value={statusText}
                             onBlur={changeEditModeHandler}
                             onChange={changeStatusText}
                             autoFocus
                    />
            }


        </div>
    );
};


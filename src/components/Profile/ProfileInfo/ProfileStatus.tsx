import React, {ChangeEvent, useState} from 'react';



type ProfileStatusPropsType = {
    status: string
    upDateStatus: (status: string) => void
}
export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({
                                                                    status,
                                                                    upDateStatus
                                                                }) => {
    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState('')
    const changeEditModeHandler = () => {
        setEditMode(!editMode)
        upDateStatus(statusText)
    }
    const changeStatusText = (e:ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                    ? <span onDoubleClick={changeEditModeHandler}>{status ||  'status here'}</span>
                    : <input type="text" value={statusText}
                             onBlur={changeEditModeHandler}
                             onChange={changeStatusText}
                             autoFocus
                    />
            }


        </div>
    );
};


import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
}
export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({
                                                                    status,
                                                                    upDateStatus,
                                                                    changeStatus,
                                                                }) => {
    const [editMode, setEditMode] = useState(false)

    const changeEditModeHandler = () => {
        setEditMode(!editMode)
        upDateStatus(status)
    }
    const changeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                    ? <span onDoubleClick={changeEditModeHandler}>{status || 'status here'}</span>
                    : <input type="text" value={status}
                             onBlur={changeEditModeHandler}
                             onChange={changeStatusText}
                             autoFocus
                    />
            }


        </div>
    );
};


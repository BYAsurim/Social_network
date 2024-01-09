import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    upDateStatus: (status: string) => void
    changeStatus: (status: string) => void
}
export const ProfileStatus = ({
                                  status,
                                  upDateStatus,
                                  changeStatus,
                              }: ProfileStatusPropsType) => {
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
                    ? <div>
                        <b>Status: </b> <span onDoubleClick={changeEditModeHandler}>{status || 'status here'}</span>
                    </div>
                    : <input type="text" value={status}
                             onBlur={changeEditModeHandler}
                             onChange={changeStatusText}
                             autoFocus
                    />
            }


        </div>
    );
};


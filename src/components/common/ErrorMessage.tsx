import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from "react-redux";
import {setErrorMessageAC} from "../../redax/appReducer";
import {Snackbar} from "@mui/material";

type ErrorMessageType = {
    error: string | null
}
export const ErrorMessage = ({error}: ErrorMessageType) => {
    // const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch()
    const isOpen = error !== null;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setErrorMessageAC(null))
    }

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} sx={{width: '400px'}} onClose={handleClose}>
            <Alert variant='filled'
                   color='error'
                   // onClose={handleClose}
                   action={
                       <IconButton
                           aria-label="close"
                           color='default'
                           size="small"
                           onClick={handleClose}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
                   sx={{mb: 2}}
            >
                {error}
            </Alert>
        </Snackbar>
    );
}
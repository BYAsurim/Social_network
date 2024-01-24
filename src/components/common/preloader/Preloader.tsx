import React from 'react';
import s from "./Preloader.module.css";
import {LinearProgress, Stack} from "@mui/material";

type PreloaderPropsType = {}
const Preloader: React.FC<PreloaderPropsType> = () => {
    return (
        <div className={s.preLoader}>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="primary" />
            </Stack>
        </div>
    );
};

export default Preloader;
import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../../images/preloader.svg";

type PreloaderPropsType = {

}
const Preloader: React.FC<PreloaderPropsType> = () => {
    return (
        <div className={s.preLoader}>
            <img src={preloader} alt="" />
        </div>
    );
};

export default Preloader;
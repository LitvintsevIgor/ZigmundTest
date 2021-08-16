import style from "./Loading.module.css";
import React from "react";
import loading from "./../images/loading.svg"

export const Loading = () => {
    return (
        <div className={style.loadingWrapper}>
            <img className={style.loading} src={loading} alt=""/>
        </div>
    )
}
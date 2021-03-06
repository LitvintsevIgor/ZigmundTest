import React from "react";
import style from "./RepositoryCard.module.scss";
import forkLogo from "../../common/images/git_fork_icon.svg";
import watchersLogo from "../../common/images/watchers.svg";
import starLogo from "../../common/images/star.svg";
import {RepositoryCardItem} from "../repositoty-card-Item/RepositotyCardItem";

export type RepositoryCardPropsType = {
    name: string
    description: string
    url: string
    forksCount: number
    watchers: number
    stargazersCount: number
}

export const RepositoryCard = React.memo( ({
                                                       name,
                                                       description,
                                                       url,
                                                       forksCount,
                                                       watchers,
                                                       stargazersCount
                                                   }: RepositoryCardPropsType) => {
        return (
            <div className={style.repoCard}>
                <a href={url}><h2>{name}</h2></a>
                <p>{description}</p>
                <p className={style.urlPoint}>
                    <span>URL:</span> <a href={url}>{url.trim()}</a>
                </p>
                <div className={style.gitDataItems}>
                    <RepositoryCardItem item={"forks"} count={forksCount} logo={forkLogo}/>
                    <RepositoryCardItem item={"watchers"} count={watchers} logo={watchersLogo}/>
                    <RepositoryCardItem item={"stargazers"} count={stargazersCount} logo={starLogo}/>
                </div>
            </div>
        )
    }
)


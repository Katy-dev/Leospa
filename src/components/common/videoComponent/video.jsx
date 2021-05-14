import React from "react";
import styles from "./video.module.scss";
import ReactPlayer from 'react-player'


const Player = () => {
    return (
        <div className={styles.player_wrapper}>
            <ReactPlayer
            className={styles.react_player}
            url="https://www.youtube.com/watch?v=UH6UY5Kr6JI"
            width="100%"
            height="100%"
            controls={true}
            />
        </div>
    )
}
export default Player;
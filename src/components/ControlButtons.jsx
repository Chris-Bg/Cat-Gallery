import React from 'react';
import styles from '../css/ControlButtons.module.css';
import previous from '../assets/previous.svg';
import next from '../assets/next.svg';
import random1 from '../assets/random1.svg';
import random2 from '../assets/random2.svg';

const ControlButtons = ({ goLeft, goRight, randomArrange, randomize }) => {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={goLeft} className={styles.button}><img src={previous} alt="Go Left" /></button>
            <button onClick={randomArrange} className={styles.button}><img src={random1} alt="Random Arrange" /></button>
            <button onClick={randomize} className={styles.button}><img src={random2} alt="Randomize" /></button>
            <button onClick={goRight} className={styles.button}><img src={next} alt="Go Right" /></button>
        </div>
    );
};

export default ControlButtons;

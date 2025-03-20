import React from 'react';
import styles from '../css/MainImage.module.css';

const MainImage = ({ image }) => {
    return <img src={image} alt="Main" className={styles.mainImage} />;
};

export default MainImage;

import React from 'react';
import styles from '../css/Gallery.module.css';

const Gallery = ({ images, curentIndex, onClickImage }) => {
    return (
        <>
            <div className={styles.galleryContainer}>
                {images.map((image, index) => {
                    const isSelected = index === curentIndex;
                    return (
                        <div
                            key={index}
                            className={`${styles.galleryItem} ${isSelected ? styles.selected : ''}`}
                            onClick={() => onClickImage(index)}
                        >
                            <img src={image.url} alt={`Cat ${index}`} className={styles.galleryImage}/>
                        </div>);
                })}
            </div>
        </>
    );
};

export default Gallery;

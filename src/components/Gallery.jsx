import React from 'react';
import styles from '../css/Gallery.module.css';

const Gallery = ({ images, onClickImage }) => {
    return (
        <>
            <div className={styles.galleryContainer}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.galleryItem}
                        onClick={() => onClickImage(index)}
                    >
                        <img src={image.url} alt={`Cat ${index}`} className={styles.galleryImage} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;

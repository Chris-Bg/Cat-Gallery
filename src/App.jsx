import React, { useState } from 'react';
import MainImage from './components/MainImage.jsx';
import ControlButtons from './components/ControlButtons.jsx';
import Gallery from './components/Gallery.jsx';
import imagesData from './data/images.json';

const App = () => {
    const [images, setImages] = useState(imagesData);
    const [currentIndex, setCurrentIndex] = useState(0);

    function goLeft(){
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    function goRight(){
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    function randomArrange(){
        setImages((prevImages) => {
            const currentImage = prevImages[currentIndex];
            const randomized = [...prevImages].sort(() => Math.random() - 0.5);
            //pentru ca sa ramana aceeasi image in MainImage la randomizarea listei, caut indexul ei nou prin url
            const newIndex = randomized.findIndex(img => img.url === currentImage.url);
            setCurrentIndex(newIndex);
            return randomized;
        });
    }

    function randomize(){
        setCurrentIndex(Math.floor(Math.random() * images.length));
    }

    return (
        <>
            <MainImage image={images[currentIndex]?.url} />
            <ControlButtons goLeft={goLeft} goRight={goRight} randomArrange={randomArrange} randomize={randomize} />
            <Gallery images={images}
                     curentIndex={currentIndex}
                     onClickImage={(index) => setCurrentIndex(index)} />
        </>
    );
};

export default App;

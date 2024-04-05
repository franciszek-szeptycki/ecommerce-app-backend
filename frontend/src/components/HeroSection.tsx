import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://52.23.229.23/api/config');
      if (response.data && response.data.length > 0) {
        const sliderImages = response.data[0].slider_images.map((imageObj: { image: string }) => imageObj.image);
        setImages(sliderImages);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  useEffect(() => {
    const startInterval = () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      intervalId.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    };
    startInterval();
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [images]);

  const handleCarouselClick = (direction: 'left' | 'right') => () => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex: number;
      if (direction === 'left') {
        newIndex = (prevIndex - 1 + images.length) % images.length;
      } else {
        newIndex = (prevIndex + 1) % images.length;
      }
      return newIndex;
    });
  };

  return (
    <div className="jumbotron fade-in" style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', height: '500px' }}>
      <button className='hs-carousel' style={{ left: '2%' }} onClick={handleCarouselClick('left')}>
        {'<'}
      </button>
      <button className='hs-carousel' style={{ right: '2%' }} onClick={handleCarouselClick('right')}>
        {'>'}
      </button>
    </div>
  );
}

export default HeroSection;
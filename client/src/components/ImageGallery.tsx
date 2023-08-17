// ImageGallery.tsx
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import ImageCaption from './ImageCaption';
import b4 from './../assets/project-1/front-before.jpg';

const ImageGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  // data.ts
  const images = [b4, 'after.jpg', 'before2.jpg'];

  const captions = [
    'Bfore Renovation',
    'After Renovation',
    'Before Renovation (Another View)',
  ];

  return (
    <div>
      <ImageSlider images={images} currentImage={currentImage} />
      <ImageCaption caption={captions[currentImage]} />
    </div>
  );
};

export default ImageGallery;

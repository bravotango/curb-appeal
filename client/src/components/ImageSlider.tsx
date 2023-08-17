// ImageSlider.tsx
import React from 'react';

interface ImageSliderProps {
  images: string[];
  currentImage: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, currentImage }) => {
  return (
    <div>
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      {/* Add navigation buttons or other controls for sliding through images */}
    </div>
  );
};

export default ImageSlider;

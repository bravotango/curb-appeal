// ImageCaption.tsx
import React from 'react';

interface ImageCaptionProps {
  caption: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ caption }) => {
  return <div>{caption}</div>;
};

export default ImageCaption;

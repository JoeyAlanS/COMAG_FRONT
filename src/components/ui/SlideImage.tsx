import React from 'react';

interface SlideImageProps {
  text: string;
}

const SlideImage: React.FC<SlideImageProps> = ({ text }) => {
  const slideNumber = {
    "primeiro": 1,
    "segundo": 2,
    "terceiro": 3,
    "quarto": 4
  }[text] || 1;

  const imageUrl = `/img/banner/${slideNumber}.png`;

  return (
    <img
      className="d-block w-100 h-50 carousel-image"
      src={imageUrl}
      alt={text}
    />
  );
};

export default SlideImage;
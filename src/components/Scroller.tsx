import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ScrollerProps {
  articles: Article[];
}

interface Article {
  title: string;
  imageUrl: string;
}

const Scroller: React.FC<ScrollerProps> = ({ articles }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='scroller-container'>
      <div className='scroller' ref={scrollRef}>
        <FaChevronLeft className='scroll-left' onClick={handleScrollLeft} />
        {articles.map((article, index) => (
          <div key={index} className='article'>
            <img src={article.imageUrl} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
        <FaChevronRight className='scroll-right' onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default Scroller;

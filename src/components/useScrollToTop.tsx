/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScroll]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={backToTop}
      style={{ zIndex: 1000 }}
      className={`fixed bottom-10 right-10 transition-opacity duration-200 ${showScroll ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image
        src="/svgs/chevronUpCircle.svg"
        alt="Chevron Up Circle"
        width={64}
        height={64}
      />
    </button>
  );
};

export default useScrollToTop;

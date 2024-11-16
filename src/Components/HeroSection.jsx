import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import laptop from "../assets/laptop.jpg";
import iphone from "../assets/iphone.jpg";
import headphone from "../assets/headphone.jpg";

// Register Swiper
register();

export const ImageSlider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (swiperElRef.current) {
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });

      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
    }
  }, []);

  return (
    <div className='flex justify-start   bg-black'>
      <div className=' w-[15%] bg-slate-400'>
        <h1>Category</h1>
      </div>
    <swiper-container className="mx-auto"
      ref={swiperElRef}
      slides-per-view="1"
      navigation="false"
      pagination="true"
      autoplay={{
        delay: 3000, // Time in milliseconds between automatic slide changes
        disableOnInteraction: false, // Autoplay will not stop when user interacts
      }}
      loop="true" // Adds looping for continuous autoplay
      >
      <swiper-slide><img className='h-[70vh] w-[75%] ' src={laptop} alt="Laptop" /></swiper-slide>
    </swiper-container>
      </div>
  );
};

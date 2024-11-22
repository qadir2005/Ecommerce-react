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
  <div className=' bg-blue-300 flex justify-center'>
    <div className='bg-orange-400 w-[30%] h-48'>
    Category
    </div>
    <div className='bg-slate-600 w-[65%]'>
Image
    </div>
  </div>

  );
};

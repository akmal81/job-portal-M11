import React from 'react';
import {easeOut, motion} from 'framer-motion';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
          <motion.img
          animate={{x:[-50, 50, -50]}}
          transition={{duration:12, repeat:Infinity, ease: easeOut}}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl" />
            </div>
          <div className='flex-1'>
            <h1 className="text-5xl font-bold">Latest jobs for you!</h1>
            <motion.h1 
            animate={{x:50, repeat: Infinity}}
            transition={{duration:2, delay: 1, ease: easeOut}}
            className="text-5xl font-bold">Latest <motion.span
                animate={{color:['#d6a10d', '#49caeb', '#d60f65']}}
                transition={{duration: 1.5, repeat: Infinity}}
            >jobs</motion.span> for you!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
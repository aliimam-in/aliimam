'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
 

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
 
      <div 
        className="absolute inset-0  z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, grey 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

       
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
           
        </div>
      </div>

       
    </div>
  );
}
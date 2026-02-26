
'use client';
import React from 'react';

export interface Abstract54SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract54Sketch = React.forwardRef<SVGSVGElement, Abstract54SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M179.21 126.957C167.401 138.765 146.235 167.063 127.742 196.473C123.509 203.157 119.944 207.501 117.493 209.06C112.703 211.957 114.151 212.179 115.488 219.086C118.05 232.232 145.009 307.986 149.8 315.338C154.033 321.799 172.303 324.029 227.336 324.586C284.151 325.254 277.133 327.258 293.732 304.643C337.401 245.377 334.282 251.616 326.15 240.141C326.038 240.03 274.348 155.03 214.413 126.065C200.822 119.493 189.125 117.042 179.21 126.957ZM312.447 250.836C311.11 252.953 264.099 316.118 264.099 316.118C194.472 316.118 198.482 317.009 162.165 310.882C156.818 309.991 154.701 296.623 134.872 218.529C134.983 218.418 190.796 131.19 197.703 131.19C222.1 131.19 316.458 243.261 312.447 250.836Z" fill="currentColor"/>
    </svg>
  )
);

Abstract54Sketch.displayName = "Abstract54Sketch";

export const Abstract54SketchMetadata = {
  id: "abstract54_sketch",
  baseId: "abstract54",
  variant: "sketch",
  name: "Abstract54",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract54Sketch;

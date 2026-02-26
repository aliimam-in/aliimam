
'use client';
import React from 'react';

export interface Organic5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic5Shapes = React.forwardRef<SVGSVGElement, Organic5ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M45.5938 76.2546C37.5823 65.0163 22.3704 42.0662 17.7499 28.75C15.7773 23.0645 23.9577 25.1415 27.0001 25.25C30.0424 25.3585 63.9557 25.25 67.0001 25.25C79.6466 25.25 103.625 23.2057 116.25 23.0645C158.108 22.5964 184.734 23.0645 226.59 23.0645C242.084 23.0645 259.91 20.5245 275.147 24.3912C279.618 25.5258 286.502 27.8173 287.505 33.3166C287.505 36.5 278.154 47.4624 268.5 59C247.657 83.9089 231.5 97.5 197 133C194.573 134.63 182.419 149.325 176.75 158.25C169.199 170.138 172 190.201 172 194C172 217.627 168.25 267.5 163.75 283.75C156.221 286.942 118.888 285.517 117.25 280.5C111.087 261.617 108.316 227.176 108.316 207.602C108.316 188.757 109.365 169.979 109.365 151.155C109.365 147.879 106.811 146.548 104.585 144.521C97.0831 137.691 89.3259 130.782 82.4926 123.233C69.2354 108.588 57.0994 92.3946 45.5938 76.2546Z" fill="#A98E5F"/>
    </svg>
  )
);

Organic5Shapes.displayName = "Organic5Shapes";

export const Organic5ShapesMetadata = {
  id: "organic5_shapes",
  baseId: "organic5",
  variant: "shapes",
  name: "Organic5",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic5Shapes;

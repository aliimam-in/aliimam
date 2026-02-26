
'use client';
import React from 'react';

export interface Organic12ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic12Shapes = React.forwardRef<SVGSVGElement, Organic12ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.8281 55.5601C23.9999 47.2892 117.172 91.5858 116 103.289C115.019 113.057 109.679 138.237 135 150.289C160.321 162.341 186.195 144.289 194 144.289C212.921 152.917 294.593 191.56 294.593 211.455C284.632 233.636 261.881 251.734 242.001 259.554C191.576 279.395 118.876 277.192 74.7391 239.879C42.6827 212.775 8.9281 160.604 7.23755 112.443C6.44966 89.9521 9.19105 60.6435 14.8281 55.5601Z" fill="#CF6F49"/>
    </svg>
  )
);

Organic12Shapes.displayName = "Organic12Shapes";

export const Organic12ShapesMetadata = {
  id: "organic12_shapes",
  baseId: "organic12",
  variant: "shapes",
  name: "Organic12",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic12Shapes;

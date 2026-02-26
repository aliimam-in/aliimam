
'use client';
import React from 'react';

export interface Organic69ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic69Shapes = React.forwardRef<SVGSVGElement, Organic69ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 600"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5502 157.575C16.5502 156.152 72.7842 282.083 84.5011 319.212C88.9011 333.157 105.697 580.398 106.289 582.123C109.552 591.643 131.942 592.905 146.984 592.537C156.994 592.293 186.098 593.638 193.533 589.177C197.392 586.862 196.961 573.562 197.514 570.137C200.576 551.15 202.154 532.039 205.726 438.057C210.092 407.316 212.227 376.191 217.053 345.535C223.49 304.65 233.181 264.452 241.696 224.004C251.163 179.036 258.454 143.437 269.696 98.8875C273.325 84.5042 279.76 40.7248 283.963 26.5261C290.908 3.06511 238.416 8.00173 217.053 9.39783C191.202 11.0871 213.963 72.5191 193.533 145.398C183.404 181.528 142.501 257.042 142.501 259.396C142.501 259.771 142.875 260.519 142.501 260.519C142.237 260.519 66.895 154.383 54.0126 136.185C33.3111 106.942 8.5167 135.769 16.5502 157.575Z" fill="#D8DFD8"/>
    </svg>
  )
);

Organic69Shapes.displayName = "Organic69Shapes";

export const Organic69ShapesMetadata = {
  id: "organic69_shapes",
  baseId: "organic69",
  variant: "shapes",
  name: "Organic69",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 600",
} as const;

export default Organic69Shapes;

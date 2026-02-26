
'use client';
import React from 'react';

export interface Organic17ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic17Shapes = React.forwardRef<SVGSVGElement, Organic17ShapesProps>(
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
      <path d="M204 163.453C208.766 172.192 214 195.469 235.473 195.469C274.613 195.469 234.17 100.764 246.176 98.2687C254.238 89.1077 276.32 94.5305 282.283 100.493C286.272 104.482 289.593 114.887 291.102 120.166C297.317 141.913 289.485 169.458 282.283 196.826C277.821 213.779 276.319 234.763 246.176 241.289C216.034 247.815 194.777 208.341 185.036 211.289C175.295 214.237 148.862 242.765 124.215 250.42C73.7619 266.089 26.6447 231.446 12.2782 188.346C8.62561 177.389 8.20752 166.541 8.20752 155.104C8.20752 121.959 18.9281 104.034 47.8943 87.2639C61.6074 79.3248 109.253 66.5431 118 75.289C126.746 84.035 114 98.2687 108.611 106.289C103.223 114.309 77.1302 112.91 65.9999 120.166C48.0607 131.862 44.3962 149.461 47.8943 163.453C49.6573 170.505 47.9713 171.047 58.9856 188.346C69.9999 205.646 104.889 217.847 125.911 196.826L126.075 196.662C135.337 187.4 144.276 178.461 147.281 164.941C150.128 152.126 145.675 131.825 152.592 120.166C159.509 108.508 176.26 109.651 185.036 116.453C193.812 123.254 195.902 148.607 204 163.453Z" fill="#775B33"/>
    </svg>
  )
);

Organic17Shapes.displayName = "Organic17Shapes";

export const Organic17ShapesMetadata = {
  id: "organic17_shapes",
  baseId: "organic17",
  variant: "shapes",
  name: "Organic17",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic17Shapes;

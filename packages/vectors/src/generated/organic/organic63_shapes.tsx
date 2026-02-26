
'use client';
import React from 'react';

export interface Organic63ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic63Shapes = React.forwardRef<SVGSVGElement, Organic63ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M23.798 30.292C20.4005 31.5337 14.3169 56.4094 13.141 67.6103C11.0653 87.4061 11.4126 98.638 10.3008 114.21C7.73761 150.117 10.8334 186.979 11.8588 223.096C12.0303 229.135 10.6897 254.318 14.9027 258.298C23.5121 266.432 44.1975 266.004 56.0739 267.357C94.3621 271.722 134.596 273.31 173.325 272.211C196.731 271.546 220.707 274.002 243.872 271.232C253.059 270.131 264.207 268.657 270.708 261.776C273.887 258.41 273.402 245.474 273.704 241.233C275.29 219.029 277.128 196.683 280.505 174.557C284.815 146.322 284.943 117.322 287.282 88.9584C288.28 76.8413 291.418 56.5105 285.538 45.5383C283.419 41.5852 276.257 41.8011 272.631 41.3014C255.072 38.8846 214.288 35.6143 196.455 34.8475C143.552 32.576 113.048 32.221 60.5264 27.8894C50.6862 27.0786 32.8025 27.0042 23.798 30.292Z" fill="currentColor"/>
    </svg>
  )
);

Organic63Shapes.displayName = "Organic63Shapes";

export const Organic63ShapesMetadata = {
  id: "organic63_shapes",
  baseId: "organic63",
  variant: "shapes",
  name: "Organic63",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic63Shapes;

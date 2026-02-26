
'use client';
import React from 'react';

export interface Organic31ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic31Shapes = React.forwardRef<SVGSVGElement, Organic31ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M279.646 62.4651C258.681 51.4651 172.65 108.665 146.308 120.444C130.089 127.697 37.175 184.787 34.6088 206.099C30.6067 239.344 84.5376 212.127 99.2165 212.127C103.229 212.127 120.182 207.592 118.927 210.621C111.11 229.48 -16.718 345.068 10.5136 369.094C27.9418 384.47 103.591 362.977 113.085 372.866C115.628 375.515 93.074 420.324 87.8971 430.595C70.316 465.47 32.5432 564.483 36.5161 569.4C46.4213 581.658 281.222 390.814 272.61 358.155C264.452 327.214 194.839 341.083 168.211 327.214C156.807 321.275 310.723 202.415 291.646 167.965C286.446 158.576 217.693 188.617 202.162 196.658C201.373 197.066 191.109 202.599 190.477 200.81C187.851 193.368 222.526 159.845 243.512 135.33C262.574 113.062 291.646 68.7614 279.646 62.4651Z" fill="currentColor"/>
    </svg>
  )
);

Organic31Shapes.displayName = "Organic31Shapes";

export const Organic31ShapesMetadata = {
  id: "organic31_shapes",
  baseId: "organic31",
  variant: "shapes",
  name: "Organic31",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 600",
} as const;

export default Organic31Shapes;

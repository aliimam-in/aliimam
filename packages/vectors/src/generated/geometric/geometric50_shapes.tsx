/**
 * Auto-generated logo component: Geometric50 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric50ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric50Shapes = React.forwardRef<SVGSVGElement, Geometric50ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M93.8396 129.225C87.3877 117.186 83.7549 103.586 83.7549 89.1897C83.7549 39.9316 126.284 0 178.746 0V80.3003C185.913 68.6329 195.86 58.6232 208.336 51.3668C250.915 26.6008 306.815 43.2864 333.192 88.6352L263.391 129.234C277.118 129.59 290.802 133.201 303.36 140.397C346.097 164.889 359.597 221.642 333.513 267.16L263.652 227.124C270.103 239.163 273.736 252.763 273.736 267.16C273.736 316.418 231.207 356.35 178.746 356.35V276.049C171.579 287.717 161.631 297.726 149.155 304.983C106.576 329.749 50.6757 313.063 24.2989 267.714L94.0997 227.115C80.3731 226.759 66.6888 223.149 54.1314 215.953C11.3937 191.461 -2.10617 134.707 23.9786 89.1898L93.8396 129.225ZM178.796 177.97C178.779 177.941 178.762 177.912 178.746 177.883L178.746 177.97C178.762 177.97 178.779 177.97 178.796 177.97ZM178.746 178.379V178.466L178.696 178.379L178.746 178.379Z" fill="#F4ADB3"/>
    </svg>
  )
);

Geometric50Shapes.displayName = "Geometric50Shapes";

export const Geometric50ShapesMetadata = {
  id: "geometric50_shapes",
  baseId: "geometric50",
  variant: "shapes",
  name: "Geometric50",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric50Shapes;

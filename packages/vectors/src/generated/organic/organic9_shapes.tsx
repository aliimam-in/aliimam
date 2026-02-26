/**
 * Auto-generated logo component: Organic9 (shapes)
 * Category: organic
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Organic9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic9Shapes = React.forwardRef<SVGSVGElement, Organic9ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 600"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M151.963 178.165C156.676 200.482 158.243 227.108 156.676 258.332C154.915 293.421 154.442 372.891 154.191 408.037C154.06 426.419 153.166 444.507 151.963 462.822C151.734 466.312 152.301 475.359 150.504 478.029C144.541 486.886 93.5918 506.218 81.2175 510.906C42.8378 525.446 1.88155 559.848 31.3043 571.208C82.8426 591.106 152.31 578.833 206.136 571.208C220.834 569.126 235.746 567.423 250.274 564.158C254.47 563.214 263.33 561.739 265.016 556.172C267.363 548.416 265.358 536.712 265.358 528.738C265.358 514.692 266.609 500.589 267.757 486.607C272.353 430.628 278.727 330.853 278.727 274.557C278.727 246.29 278.728 189.004 275.595 178.165C270.353 160.029 144.675 143.653 151.963 178.165Z" fill="#42535D"/>
    </svg>
  )
);

Organic9Shapes.displayName = "Organic9Shapes";

export const Organic9ShapesMetadata = {
  id: "organic9_shapes",
  baseId: "organic9",
  variant: "shapes",
  name: "Organic9",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 600",
} as const;

export default Organic9Shapes;

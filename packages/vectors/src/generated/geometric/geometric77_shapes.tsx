/**
 * Auto-generated logo component: Geometric77 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric77ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric77Shapes = React.forwardRef<SVGSVGElement, Geometric77ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M251.148 187.053C320.348 218.158 352.883 283.15 356.086 354.822C356.379 361.376 351.031 366.701 344.471 366.701H264.424C325.806 400.722 353.222 461.287 356.095 527.822C356.378 534.376 351.031 539.7 344.471 539.7H264.424C325.806 573.721 353.222 634.287 356.095 700.821C356.378 707.376 351.031 712.699 344.471 712.699H11.8784C5.31816 712.699 -0.0287528 707.376 0.254298 700.821C3.12773 634.287 30.5438 573.721 91.9255 539.7H11.8784C5.31816 539.7 -0.0287528 534.376 0.254298 527.822C3.12773 461.287 30.5438 400.722 91.9255 366.701H11.8784C5.31817 366.701 -0.0292599 361.376 0.263652 354.822C3.46699 283.15 36.0015 218.158 105.202 187.053L23.8709 48.7012L332.479 48.7012L251.148 187.053Z" fill="#292524"/>
    </svg>
  )
);

Geometric77Shapes.displayName = "Geometric77Shapes";

export const Geometric77ShapesMetadata = {
  id: "geometric77_shapes",
  baseId: "geometric77",
  variant: "shapes",
  name: "Geometric77",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric77Shapes;

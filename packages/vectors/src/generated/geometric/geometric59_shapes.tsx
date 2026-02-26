
'use client';
import React from 'react';

export interface Geometric59ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric59Shapes = React.forwardRef<SVGSVGElement, Geometric59ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 713 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M684.824 87.4575C708.029 123.232 697.839 171.044 662.065 194.249L505.658 295.703C468.304 319.932 420.195 319.932 382.841 295.703L268.45 221.503L134.668 308.281C98.893 331.486 51.0807 321.297 27.8756 285.522C4.67056 249.748 14.8601 201.936 50.6345 178.73L207.041 77.2773C244.396 53.0477 292.505 53.0477 329.859 77.2774L444.249 151.477L578.032 64.6986C613.806 41.4936 661.619 51.6831 684.824 87.4575Z" fill="currentColor"/>
    </svg>
  )
);

Geometric59Shapes.displayName = "Geometric59Shapes";

export const Geometric59ShapesMetadata = {
  id: "geometric59_shapes",
  baseId: "geometric59",
  variant: "shapes",
  name: "Geometric59",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric59Shapes;


'use client';
import React from 'react';

export interface Misc8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc8Shapes = React.forwardRef<SVGSVGElement, Misc8ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M3.59005 0.494226C0.702934 1.15943 -0.203083 3.15505 0.0367393 4.95109C0.274399 6.73093 2.51281 8.31658 5.79507 8.21379C4.90124 8.27301 2.08871 9.1525 1.51725 11.2705C0.924955 13.4656 2.24959 14.8213 3.88616 15.5278C6.45406 16.6362 9.28999 16.633 11.7329 16.5C10.2315 17.2093 8.08147 18.5389 7.80967 20.5833C7.53788 22.6277 9.58633 24.5745 13.7319 23.8428C17.8775 23.111 25.7464 20.1 23.6518 14.9291C22.8119 12.8556 20.0603 12.0737 18.4698 11.8026C17.7813 11.6853 15.7308 11.4035 12.8437 11.4035C16.3051 11.1208 21.6824 9.67399 21.9491 6.41451C22.4826 -0.104426 8.75578 -0.695975 3.59005 0.494226Z" fill="currentColor"/>
    </svg>
  )
);

Misc8Shapes.displayName = "Misc8Shapes";

export const Misc8ShapesMetadata = {
  id: "misc8_shapes",
  baseId: "misc8",
  variant: "shapes",
  name: "Misc8",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc8Shapes;

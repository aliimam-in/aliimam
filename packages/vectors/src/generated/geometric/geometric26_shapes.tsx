
'use client';
import React from 'react';

export interface Geometric26ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric26Shapes = React.forwardRef<SVGSVGElement, Geometric26ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M356.35 113.39C484.772 113.39 588.878 217.497 588.878 345.919H529.487C529.487 250.298 451.971 172.782 356.35 172.782C260.729 172.782 183.212 250.298 183.212 345.919H123.821C123.821 217.497 227.928 113.39 356.35 113.39Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M356.35 7.98096C542.988 7.98097 694.288 159.281 694.288 345.919H634.896C634.896 192.082 510.187 67.3726 356.35 67.3725C202.513 67.3725 77.8032 192.082 77.8032 345.919H18.4116C18.4116 159.281 169.712 7.98094 356.35 7.98096Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M356.35 214.008C429.202 214.008 488.261 273.067 488.261 345.919H428.869C428.869 305.868 396.401 273.4 356.35 273.4C316.298 273.4 283.831 305.868 283.831 345.919H224.439C224.439 273.067 283.497 214.008 356.35 214.008Z" fill="currentColor"/>
    </svg>
  )
);

Geometric26Shapes.displayName = "Geometric26Shapes";

export const Geometric26ShapesMetadata = {
  id: "geometric26_shapes",
  baseId: "geometric26",
  variant: "shapes",
  name: "Geometric26",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric26Shapes;

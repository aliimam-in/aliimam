
'use client';
import React from 'react';

export interface Ellipse9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse9Shapes = React.forwardRef<SVGSVGElement, Ellipse9ShapesProps>(
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
      <path d="M23.9804 12.24H0.0196075C0.0390859 13.2343 0.179336 14.199 0.426275 15.12H23.5737C23.8207 14.199 23.9609 13.2343 23.9804 12.24Z" fill="currentColor"/>
<path d="M23.4342 15.6H0.565831C0.830533 16.444 1.18584 17.2478 1.62034 18H22.3797C22.8142 17.2478 23.1695 16.444 23.4342 15.6Z" fill="currentColor"/>
<path d="M22.0872 18.48H1.91281C2.35694 19.1719 2.87012 19.8152 3.44261 20.4H20.5574C21.1299 19.8152 21.6431 19.1719 22.0872 18.48Z" fill="currentColor"/>
<path d="M20.0598 20.88H3.9402C4.65455 21.5306 5.44771 22.096 6.30366 22.56H17.6963C18.5523 22.096 19.3455 21.5306 20.0598 20.88Z" fill="currentColor"/>
<path d="M16.7041 23.04H7.29589C8.74012 23.6579 10.3302 24 12 24C13.6698 24 15.2599 23.6579 16.7041 23.04Z" fill="currentColor"/>
<path d="M23.9804 11.76H0.0196075C0.0450991 10.4587 0.27744 9.20815 0.685062 8.04H23.3149C23.7226 9.20815 23.9549 10.4587 23.9804 11.76Z" fill="currentColor"/>
<path d="M23.1358 7.56C21.3732 3.1305 17.0517 0 12 0C6.94834 0 2.62679 3.1305 0.864216 7.56H23.1358Z" fill="currentColor"/>
    </svg>
  )
);

Ellipse9Shapes.displayName = "Ellipse9Shapes";

export const Ellipse9ShapesMetadata = {
  id: "ellipse9_shapes",
  baseId: "ellipse9",
  variant: "shapes",
  name: "Ellipse9",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse9Shapes;

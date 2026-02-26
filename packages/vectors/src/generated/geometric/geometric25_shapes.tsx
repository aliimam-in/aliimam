
'use client';
import React from 'react';

export interface Geometric25ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric25Shapes = React.forwardRef<SVGSVGElement, Geometric25ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 713"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M243.4 112.314C232.941 100.864 229.706 81.5792 229.706 66.072C229.706 40.7338 206.635 20.1931 178.175 20.1931C149.714 20.1931 126.643 40.7338 126.643 66.072C126.643 81.5792 123.408 100.864 112.949 112.314C101.193 125.184 94.1456 141.601 94.1456 159.483C94.1456 167.73 95.6445 175.666 98.4132 183.086C104.239 198.698 101.503 219.54 89.1472 230.722C66.9724 250.789 53.2917 278.318 53.2917 308.693C53.2917 326.031 57.7493 342.442 65.6999 357.068C73.1534 370.779 70.6677 389.349 58.6506 399.305C24.2226 427.831 2.68823 468.527 2.68823 513.701C2.68823 599.988 81.2562 669.937 178.175 669.937C275.093 669.937 353.661 599.988 353.661 513.701C353.661 468.527 332.127 427.831 297.699 399.305C285.682 389.349 283.196 370.779 290.649 357.068C298.6 342.442 303.058 326.031 303.058 308.693C303.058 278.318 289.377 250.789 267.202 230.722C254.846 219.54 252.11 198.698 257.936 183.086C260.705 175.666 262.204 167.73 262.204 159.483C262.204 141.601 255.157 125.184 243.4 112.314Z" fill="currentColor"/>
    </svg>
  )
);

Geometric25Shapes.displayName = "Geometric25Shapes";

export const Geometric25ShapesMetadata = {
  id: "geometric25_shapes",
  baseId: "geometric25",
  variant: "shapes",
  name: "Geometric25",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric25Shapes;

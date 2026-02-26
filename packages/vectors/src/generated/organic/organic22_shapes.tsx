
'use client';
import React from 'react';

export interface Organic22ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic22Shapes = React.forwardRef<SVGSVGElement, Organic22ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M87.5901 209.23C75.1341 205.909 64.3612 199.234 53.467 192.524C41.3104 185.037 28.7158 175.966 21.3303 163.416C17.5818 157.048 15.3685 149.329 13.9285 142.315C10.4372 125.308 11.1521 108.016 16.5002 91.5763C21.0292 77.6536 25.6607 65.5437 35.8371 54.6729C43.0519 46.9657 51.3411 40.2584 59.9585 34.2042C72.5319 25.3715 85.1248 17.3355 99.8219 12.7007C118.766 6.72727 139.092 6.0468 158.776 5.31013C181.589 4.45718 207.245 4.66471 228.554 13.9309C240.859 19.2812 249.444 26.5961 259.458 35.6537C264.301 40.0336 268.072 43.5583 271.358 49.2781C283.474 70.3738 290.373 95.1539 287.609 119.55C285.912 134.53 280.762 148.809 273.49 161.955C261.319 183.96 232.222 193.27 225.505 218.828C223.024 228.266 226.067 237.748 225.505 247.531C224.358 267.46 222.775 269.691 220.138 290.031C219.506 294.908 209.8 298.235 207.785 290.031C203.217 271.432 204.41 268.8 197.699 253.502C194.603 246.443 189.281 239.692 185.114 233.277C175.676 218.749 155.146 220.491 140.11 219.529C121.957 218.366 104.548 216.412 87.5901 209.23Z" fill="#B3BDB5"/>
    </svg>
  )
);

Organic22Shapes.displayName = "Organic22Shapes";

export const Organic22ShapesMetadata = {
  id: "organic22_shapes",
  baseId: "organic22",
  variant: "shapes",
  name: "Organic22",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic22Shapes;

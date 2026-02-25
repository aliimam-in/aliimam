/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CarFanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CarFanFilled = React.forwardRef<SVGSVGElement, CarFanFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12.363 2.068l4.912 1.914a2.7 2.7 0 0 1 .68 4.646l-3.045 2.371l6.09 .001a1 1 0 0 1 .932 1.363l-1.914 4.912a2.7 2.7 0 0 1 -4.646 .68l-2.372 -3.047v6.092a1 1 0 0 1 -1.363 .932l-4.912 -1.914a2.7 2.7 0 0 1 -.68 -4.646l3.045 -2.372h-6.09a1 1 0 0 1 -.932 -1.363l1.914 -4.912a2.7 2.7 0 0 1 4.646 -.68l2.371 3.044l.001 -6.089a1 1 0 0 1 1.363 -.932" />
    </svg>
  )
);
CarFanFilled.displayName = "CarFanFilled";
export const CarFanFilledMetadata = { 
  id: "car-fan_filled", 
  baseId: "car-fan", 
  variant: "filled", 
  name: "Car Fan", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CarFanFilled;

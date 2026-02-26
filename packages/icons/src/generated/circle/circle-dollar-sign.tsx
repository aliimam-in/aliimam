/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleDollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleDollarSign = React.forwardRef<SVGSVGElement, CircleDollarSignProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
  <path d="M12 18V6" />
    </svg>
  )
);
CircleDollarSign.displayName = "CircleDollarSign";
export const CircleDollarSignMetadata = { 
  id: "circle-dollar-sign", 
  baseId: "circle-dollar-sign", 
  variant: "default", 
  name: "Circle Dollar Sign", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleDollarSign;

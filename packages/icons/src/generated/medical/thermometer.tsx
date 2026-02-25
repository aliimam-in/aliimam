/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThermometerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Thermometer = React.forwardRef<SVGSVGElement, ThermometerProps>(
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
);
Thermometer.displayName = "Thermometer";
export const ThermometerMetadata = { 
  id: "thermometer", 
  baseId: "thermometer", 
  variant: "default", 
  name: "Thermometer", 
  category: "medical", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Thermometer;

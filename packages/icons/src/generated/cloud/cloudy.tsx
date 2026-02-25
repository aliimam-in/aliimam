/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cloudy = React.forwardRef<SVGSVGElement, CloudyProps>(
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
      <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" />
  <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
    </svg>
  )
);
Cloudy.displayName = "Cloudy";
export const CloudyMetadata = { 
  id: "cloudy", 
  baseId: "cloudy", 
  variant: "default", 
  name: "Cloudy", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cloudy;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunMoonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SunMoon = React.forwardRef<SVGSVGElement, SunMoonProps>(
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
      <path d="M12 2v2" />
  <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
  <path d="M16 12a4 4 0 0 0-4-4" />
  <path d="m19 5-1.256 1.256" />
  <path d="M20 12h2" />
    </svg>
  )
);
SunMoon.displayName = "SunMoon";
export const SunMoonMetadata = { 
  id: "sun-moon", 
  baseId: "sun-moon", 
  variant: "default", 
  name: "Sun Moon", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SunMoon;

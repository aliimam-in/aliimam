/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunSnowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SunSnow = React.forwardRef<SVGSVGElement, SunSnowProps>(
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
      <path d="M10 21v-1" />
  <path d="M10 4V3" />
  <path d="M10 9a3 3 0 0 0 0 6" />
  <path d="m14 20 1.25-2.5L18 18" />
  <path d="m14 4 1.25 2.5L18 6" />
  <path d="m17 21-3-6 1.5-3H22" />
  <path d="m17 3-3 6 1.5 3" />
  <path d="M2 12h1" />
  <path d="m20 10-1.5 2 1.5 2" />
  <path d="m3.64 18.36.7-.7" />
  <path d="m4.34 6.34-.7-.7" />
    </svg>
  )
);
SunSnow.displayName = "SunSnow";
export const SunSnowMetadata = { 
  id: "sun-snow", 
  baseId: "sun-snow", 
  variant: "default", 
  name: "Sun Snow", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SunSnow;

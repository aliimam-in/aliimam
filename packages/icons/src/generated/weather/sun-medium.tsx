/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunMediumProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SunMedium = React.forwardRef<SVGSVGElement, SunMediumProps>(
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
      <circle cx="12" cy="12" r="4" />
  <path d="M12 3v1" />
  <path d="M12 20v1" />
  <path d="M3 12h1" />
  <path d="M20 12h1" />
  <path d="m18.364 5.636-.707.707" />
  <path d="m6.343 17.657-.707.707" />
  <path d="m5.636 5.636.707.707" />
  <path d="m17.657 17.657.707.707" />
    </svg>
  )
);
SunMedium.displayName = "SunMedium";
export const SunMediumMetadata = { 
  id: "sun-medium", 
  baseId: "sun-medium", 
  variant: "default", 
  name: "Sun Medium", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SunMedium;

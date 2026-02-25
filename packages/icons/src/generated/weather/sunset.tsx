/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sunset = React.forwardRef<SVGSVGElement, SunsetProps>(
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
      <path d="M12 10V2" />
  <path d="m4.93 10.93 1.41 1.41" />
  <path d="M2 18h2" />
  <path d="M20 18h2" />
  <path d="m19.07 10.93-1.41 1.41" />
  <path d="M22 22H2" />
  <path d="m16 6-4 4-4-4" />
  <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  )
);
Sunset.displayName = "Sunset";
export const SunsetMetadata = { 
  id: "sunset", 
  baseId: "sunset", 
  variant: "default", 
  name: "Sunset", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Sunset;

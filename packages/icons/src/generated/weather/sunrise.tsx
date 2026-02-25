/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunriseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sunrise = React.forwardRef<SVGSVGElement, SunriseProps>(
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
      <path d="M12 2v8" />
  <path d="m4.93 10.93 1.41 1.41" />
  <path d="M2 18h2" />
  <path d="M20 18h2" />
  <path d="m19.07 10.93-1.41 1.41" />
  <path d="M22 22H2" />
  <path d="m8 6 4-4 4 4" />
  <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  )
);
Sunrise.displayName = "Sunrise";
export const SunriseMetadata = { 
  id: "sunrise", 
  baseId: "sunrise", 
  variant: "default", 
  name: "Sunrise", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Sunrise;

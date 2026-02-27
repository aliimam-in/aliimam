/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HealthRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HealthRounded = React.forwardRef<SVGSVGElement, HealthRoundedProps>(
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
      <path d="M8.96997 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.96997 12.7L7.96997 12.68C8.71997 12.68 9.55997 13.25 9.83997 13.95L10.98 16.83C11.24 17.48 11.65 17.48 11.91 16.83L14.2 11.02C14.42 10.46 14.83 10.44 15.11 10.97L16.15 12.94C16.46 13.53 17.26 14.01 17.92 14.01H21.98"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HealthRounded.displayName = "HealthRounded";
export const HealthRoundedMetadata = { 
  id: "health_rounded", 
  baseId: "health", 
  variant: "rounded", 
  name: "Health", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HealthRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RocketProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rocket = React.forwardRef<SVGSVGElement, RocketProps>(
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
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
    </svg>
  )
);
Rocket.displayName = "Rocket";
export const RocketMetadata = { 
  id: "rocket", 
  baseId: "rocket", 
  variant: "default", 
  name: "Rocket", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rocket;

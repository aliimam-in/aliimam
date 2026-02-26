/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OrbitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Orbit = React.forwardRef<SVGSVGElement, OrbitProps>(
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
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
  <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
  <circle cx="12" cy="12" r="3" />
  <circle cx="19" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
    </svg>
  )
);
Orbit.displayName = "Orbit";
export const OrbitMetadata = { 
  id: "orbit", 
  baseId: "orbit", 
  variant: "default", 
  name: "Orbit", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Orbit;

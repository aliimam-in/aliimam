/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RadiusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Radius = React.forwardRef<SVGSVGElement, RadiusProps>(
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
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
  <circle cx="19" cy="19" r="2" />
  <path d="m13.41 13.41 4.18 4.18" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
Radius.displayName = "Radius";
export const RadiusMetadata = { 
  id: "radius", 
  baseId: "radius", 
  variant: "default", 
  name: "Radius", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Radius;

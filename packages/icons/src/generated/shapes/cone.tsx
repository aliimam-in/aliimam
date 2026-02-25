/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ConeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cone = React.forwardRef<SVGSVGElement, ConeProps>(
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
      <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
  <ellipse cx="12" cy="19" rx="9" ry="3" />
    </svg>
  )
);
Cone.displayName = "Cone";
export const ConeMetadata = { 
  id: "cone", 
  baseId: "cone", 
  variant: "default", 
  name: "Cone", 
  category: "shapes", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cone;

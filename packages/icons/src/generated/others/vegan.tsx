/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VeganProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vegan = React.forwardRef<SVGSVGElement, VeganProps>(
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
      <path d="M16 8q6 0 6-6-6 0-6 6" />
  <path d="M17.41 3.59a10 10 0 1 0 3 3" />
  <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
    </svg>
  )
);
Vegan.displayName = "Vegan";
export const VeganMetadata = { 
  id: "vegan", 
  baseId: "vegan", 
  variant: "default", 
  name: "Vegan", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Vegan;

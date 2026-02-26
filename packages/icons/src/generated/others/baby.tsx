/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BabyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Baby = React.forwardRef<SVGSVGElement, BabyProps>(
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
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
  <path d="M15 12h.01" />
  <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  <path d="M9 12h.01" />
    </svg>
  )
);
Baby.displayName = "Baby";
export const BabyMetadata = { 
  id: "baby", 
  baseId: "baby", 
  variant: "default", 
  name: "Baby", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Baby;

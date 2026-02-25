/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Disc = React.forwardRef<SVGSVGElement, DiscProps>(
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
      <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
Disc.displayName = "Disc";
export const DiscMetadata = { 
  id: "disc", 
  baseId: "disc", 
  variant: "default", 
  name: "Disc", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Disc;

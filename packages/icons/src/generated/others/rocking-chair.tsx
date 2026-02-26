/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RockingChairProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RockingChair = React.forwardRef<SVGSVGElement, RockingChairProps>(
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
      <path d="m15 13 3.708 7.416" />
  <path d="M3 19a15 15 0 0 0 18 0" />
  <path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" />
  <path d="m9 13-3.708 7.416" />
    </svg>
  )
);
RockingChair.displayName = "RockingChair";
export const RockingChairMetadata = { 
  id: "rocking-chair", 
  baseId: "rocking-chair", 
  variant: "default", 
  name: "Rocking Chair", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RockingChair;

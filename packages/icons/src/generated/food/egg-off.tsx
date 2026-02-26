/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EggOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EggOff = React.forwardRef<SVGSVGElement, EggOffProps>(
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
      <path d="m2 2 20 20" />
  <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
  <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
    </svg>
  )
);
EggOff.displayName = "EggOff";
export const EggOffMetadata = { 
  id: "egg-off", 
  baseId: "egg-off", 
  variant: "default", 
  name: "Egg Off", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EggOff;

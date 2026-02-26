/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RollerCoasterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RollerCoaster = React.forwardRef<SVGSVGElement, RollerCoasterProps>(
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
      <path d="M6 19V5" />
  <path d="M10 19V6.8" />
  <path d="M14 19v-7.8" />
  <path d="M18 5v4" />
  <path d="M18 19v-6" />
  <path d="M22 19V9" />
  <path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />
    </svg>
  )
);
RollerCoaster.displayName = "RollerCoaster";
export const RollerCoasterMetadata = { 
  id: "roller-coaster", 
  baseId: "roller-coaster", 
  variant: "default", 
  name: "Roller Coaster", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RollerCoaster;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShieldOff = React.forwardRef<SVGSVGElement, ShieldOffProps>(
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
  <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
  <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </svg>
  )
);
ShieldOff.displayName = "ShieldOff";
export const ShieldOffMetadata = { 
  id: "shield-off", 
  baseId: "shield-off", 
  variant: "default", 
  name: "Shield Off", 
  category: "shield", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShieldOff;

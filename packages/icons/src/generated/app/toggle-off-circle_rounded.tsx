/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleOffCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleOffCircleRounded = React.forwardRef<SVGSVGElement, ToggleOffCircleRoundedProps>(
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
      <path d="M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ToggleOffCircleRounded.displayName = "ToggleOffCircleRounded";
export const ToggleOffCircleRoundedMetadata = { 
  id: "toggle-off-circle_rounded", 
  baseId: "toggle-off-circle", 
  variant: "rounded", 
  name: "Toggle Off Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleOffCircleRounded;

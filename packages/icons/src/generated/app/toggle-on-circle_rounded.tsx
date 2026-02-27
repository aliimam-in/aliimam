/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleOnCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleOnCircleRounded = React.forwardRef<SVGSVGElement, ToggleOnCircleRoundedProps>(
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
<path d="M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ToggleOnCircleRounded.displayName = "ToggleOnCircleRounded";
export const ToggleOnCircleRoundedMetadata = { 
  id: "toggle-on-circle_rounded", 
  baseId: "toggle-on-circle", 
  variant: "rounded", 
  name: "Toggle On Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleOnCircleRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid8FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid8Filled = React.forwardRef<SVGSVGElement, Grid8FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M22 7.81003V11.25H16.75V2.03003C20.05 2.23003 22 4.36003 22 7.81003Z" fill="currentColor"/>
<path d="M22 12.75V16.19C22 19.64 20.05 21.77 16.75 21.97V12.75H22Z" fill="currentColor"/>
<path d="M7.25 12.75V21.97C3.95 21.77 2 19.64 2 16.19V12.75H7.25Z" fill="currentColor"/>
<path d="M7.25 2.03003V11.25H2V7.81003C2 4.36003 3.95 2.23003 7.25 2.03003Z" fill="currentColor"/>
<path d="M15.25 2H8.75V11.25H15.25V2Z" fill="currentColor"/>
<path d="M15.25 12.75H8.75V22H15.25V12.75Z" fill="currentColor"/>
    </svg>
  )
);
Grid8Filled.displayName = "Grid8Filled";
export const Grid8FilledMetadata = { 
  id: "grid-8_filled", 
  baseId: "grid-8", 
  variant: "filled", 
  name: "Grid 8", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid8Filled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PauseFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PauseFilled = React.forwardRef<SVGSVGElement, PauseFilledProps>(
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
      <path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" fill="currentColor"/>
<path d="M21.0001 19.11V4.89C21.0001 3.54 20.4301 3 18.9901 3H15.3601C13.9301 3 13.3501 3.54 13.3501 4.89V19.11C13.3501 20.46 13.9201 21 15.3601 21H18.9901C20.4301 21 21.0001 20.46 21.0001 19.11Z" fill="currentColor"/>
    </svg>
  )
);
PauseFilled.displayName = "PauseFilled";
export const PauseFilledMetadata = { 
  id: "pause_filled", 
  baseId: "pause", 
  variant: "filled", 
  name: "Pause", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PauseFilled;

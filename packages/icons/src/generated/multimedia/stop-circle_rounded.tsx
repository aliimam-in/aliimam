/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StopCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StopCircleRounded = React.forwardRef<SVGSVGElement, StopCircleRoundedProps>(
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
      <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.73 16.23H13.27C15.39 16.23 16.23 15.38 16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.38 8.62002 16.23 10.73 16.23Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
StopCircleRounded.displayName = "StopCircleRounded";
export const StopCircleRoundedMetadata = { 
  id: "stop-circle_rounded", 
  baseId: "stop-circle", 
  variant: "rounded", 
  name: "Stop Circle", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StopCircleRounded;

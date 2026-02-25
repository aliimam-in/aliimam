/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleStopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleStop = React.forwardRef<SVGSVGElement, CircleStopProps>(
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
  <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  )
);
CircleStop.displayName = "CircleStop";
export const CircleStopMetadata = { 
  id: "circle-stop", 
  baseId: "circle-stop", 
  variant: "default", 
  name: "Circle Stop", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleStop;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockCheck = React.forwardRef<SVGSVGElement, ClockCheckProps>(
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
      <path d="M12 6v6l4 2" />
  <path d="M22 12a10 10 0 1 0-11 9.95" />
  <path d="m22 16-5.5 5.5L14 19" />
    </svg>
  )
);
ClockCheck.displayName = "ClockCheck";
export const ClockCheckMetadata = { 
  id: "clock-check", 
  baseId: "clock-check", 
  variant: "default", 
  name: "Clock Check", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockCheck;

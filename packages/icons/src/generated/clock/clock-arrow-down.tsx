/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockArrowDown = React.forwardRef<SVGSVGElement, ClockArrowDownProps>(
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
      <path d="M12 6v6l2 1" />
  <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
  <path d="m14 18 4 4 4-4" />
  <path d="M18 14v8" />
    </svg>
  )
);
ClockArrowDown.displayName = "ClockArrowDown";
export const ClockArrowDownMetadata = { 
  id: "clock-arrow-down", 
  baseId: "clock-arrow-down", 
  variant: "default", 
  name: "Clock Arrow Down", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockArrowDown;

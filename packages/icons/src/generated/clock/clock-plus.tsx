/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockPlus = React.forwardRef<SVGSVGElement, ClockPlusProps>(
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
      <path d="M12 6v6l3.644 1.822" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
    </svg>
  )
);
ClockPlus.displayName = "ClockPlus";
export const ClockPlusMetadata = { 
  id: "clock-plus", 
  baseId: "clock-plus", 
  variant: "default", 
  name: "Clock Plus", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockPlus;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock1 = React.forwardRef<SVGSVGElement, Clock1Props>(
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
  <path d="M12 6v6l2-4" />
    </svg>
  )
);
Clock1.displayName = "Clock1";
export const Clock1Metadata = { 
  id: "clock-1", 
  baseId: "clock-1", 
  variant: "default", 
  name: "Clock 1", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock1;

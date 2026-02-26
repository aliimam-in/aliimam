/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock9Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock9 = React.forwardRef<SVGSVGElement, Clock9Props>(
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
  <path d="M12 6v6H8" />
    </svg>
  )
);
Clock9.displayName = "Clock9";
export const Clock9Metadata = { 
  id: "clock-9", 
  baseId: "clock-9", 
  variant: "default", 
  name: "Clock 9", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock9;

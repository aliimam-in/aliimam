/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock5 = React.forwardRef<SVGSVGElement, Clock5Props>(
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
  <path d="M12 6v6l2 4" />
    </svg>
  )
);
Clock5.displayName = "Clock5";
export const Clock5Metadata = { 
  id: "clock-5", 
  baseId: "clock-5", 
  variant: "default", 
  name: "Clock 5", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock5;

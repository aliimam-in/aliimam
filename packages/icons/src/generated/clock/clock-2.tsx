/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock2 = React.forwardRef<SVGSVGElement, Clock2Props>(
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
  <path d="M12 6v6l4-2" />
    </svg>
  )
);
Clock2.displayName = "Clock2";
export const Clock2Metadata = { 
  id: "clock-2", 
  baseId: "clock-2", 
  variant: "default", 
  name: "Clock 2", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock2;

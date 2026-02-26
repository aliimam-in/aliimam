/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock7Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock7 = React.forwardRef<SVGSVGElement, Clock7Props>(
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
  <path d="M12 6v6l-2 4" />
    </svg>
  )
);
Clock7.displayName = "Clock7";
export const Clock7Metadata = { 
  id: "clock-7", 
  baseId: "clock-7", 
  variant: "default", 
  name: "Clock 7", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock7;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock10Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock10 = React.forwardRef<SVGSVGElement, Clock10Props>(
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
  <path d="M12 6v6l-4-2" />
    </svg>
  )
);
Clock10.displayName = "Clock10";
export const Clock10Metadata = { 
  id: "clock-10", 
  baseId: "clock-10", 
  variant: "default", 
  name: "Clock 10", 
  category: "clock", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Clock10;

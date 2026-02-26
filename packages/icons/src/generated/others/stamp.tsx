/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StampProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Stamp = React.forwardRef<SVGSVGElement, StampProps>(
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
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
  <path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
  <path d="M5 22h14" />
    </svg>
  )
);
Stamp.displayName = "Stamp";
export const StampMetadata = { 
  id: "stamp", 
  baseId: "stamp", 
  variant: "default", 
  name: "Stamp", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Stamp;

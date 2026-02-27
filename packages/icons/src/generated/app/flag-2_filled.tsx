/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Flag2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flag2Filled = React.forwardRef<SVGSVGElement, Flag2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15.2 7.16L7.2 3.7V2.75C7.2 2.34 6.86 2 6.45 2C6.04 2 5.7 2.34 5.7 2.75V21.25C5.7 21.66 6.04 22 6.45 22C6.86 22 7.2 21.66 7.2 21.25V17.29L15.42 13.23C15.42 13.23 15.42 13.23 15.43 13.23C17.09 12.37 17.98 11.26 17.93 10.09C17.88 8.92 16.91 7.88 15.2 7.16Z" fill="currentColor"/>
    </svg>
  )
);
Flag2Filled.displayName = "Flag2Filled";
export const Flag2FilledMetadata = { 
  id: "flag-2_filled", 
  baseId: "flag-2", 
  variant: "filled", 
  name: "Flag 2", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Flag2Filled;

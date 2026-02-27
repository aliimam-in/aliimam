/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignBottomFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignBottomFilled = React.forwardRef<SVGSVGElement, AlignBottomFilledProps>(
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
      <path d="M15.98 19.3799H17.02C18.61 19.3799 19.25 18.7799 19.25 17.2599V5.37988H13.75V17.2599C13.76 18.7799 14.4 19.3799 15.98 19.3799Z" fill="currentColor"/>
<path d="M7.48 14.3799H8.52C10.11 14.3799 10.75 13.7699 10.75 12.2599V5.37988H5.25V12.2599C5.26 13.7699 5.9 14.3799 7.48 14.3799Z" fill="currentColor"/>
<path d="M21.25 6.11988H2.75C2.34 6.11988 2 5.78988 2 5.37988C2 4.96988 2.34 4.62988 2.75 4.62988H21.25C21.66 4.62988 22 4.96988 22 5.37988C22 5.78988 21.66 6.11988 21.25 6.11988Z" fill="currentColor"/>
    </svg>
  )
);
AlignBottomFilled.displayName = "AlignBottomFilled";
export const AlignBottomFilledMetadata = { 
  id: "align-bottom_filled", 
  baseId: "align-bottom", 
  variant: "filled", 
  name: "Align Bottom", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignBottomFilled;

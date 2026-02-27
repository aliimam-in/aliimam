/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UndoRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UndoRounded = React.forwardRef<SVGSVGElement, UndoRoundedProps>(
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
      <path d="M7.12988 18.31H15.1299C17.8899 18.31 20.1299 16.07 20.1299 13.31C20.1299 10.55 17.8899 8.31 15.1299 8.31H4.12988"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.43012 10.81L3.87012 8.25L6.43012 5.69"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UndoRounded.displayName = "UndoRounded";
export const UndoRoundedMetadata = { 
  id: "undo_rounded", 
  baseId: "undo", 
  variant: "rounded", 
  name: "Undo", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UndoRounded;

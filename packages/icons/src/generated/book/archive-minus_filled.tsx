/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveMinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveMinusFilled = React.forwardRef<SVGSVGElement, ArchiveMinusFilledProps>(
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
      <path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2ZM14.4999 11.4H9.49995C9.08995 11.4 8.74995 11.06 8.74995 10.65C8.74995 10.24 9.08995 9.9 9.49995 9.9H14.4999C14.9099 9.9 15.2499 10.24 15.2499 10.65C15.2499 11.06 14.9099 11.4 14.4999 11.4Z" fill="currentColor"/>
    </svg>
  )
);
ArchiveMinusFilled.displayName = "ArchiveMinusFilled";
export const ArchiveMinusFilledMetadata = { 
  id: "archive-minus_filled", 
  baseId: "archive-minus", 
  variant: "filled", 
  name: "Archive Minus", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveMinusFilled;

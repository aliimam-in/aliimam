/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Pennant2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pennant2Filled = React.forwardRef<SVGSVGElement, Pennant2FilledProps>(
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
      <path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v17h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-7.351l-8.406 -3.735c-.752 -.335 -.79 -1.365 -.113 -1.77l.113 -.058l8.406 -3.736v-.35a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
Pennant2Filled.displayName = "Pennant2Filled";
export const Pennant2FilledMetadata = { 
  id: "pennant-2_filled", 
  baseId: "pennant-2", 
  variant: "filled", 
  name: "Pennant 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Pennant2Filled;

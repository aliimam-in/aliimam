/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IroningFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IroningFilled = React.forwardRef<SVGSVGElement, IroningFilledProps>(
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
      <path d="M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2z" />
    </svg>
  )
);
IroningFilled.displayName = "IroningFilled";
export const IroningFilledMetadata = { 
  id: "ironing_filled", 
  baseId: "ironing", 
  variant: "filled", 
  name: "Ironing", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default IroningFilled;

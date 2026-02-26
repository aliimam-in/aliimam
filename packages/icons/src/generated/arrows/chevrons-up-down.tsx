/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsUpDown = React.forwardRef<SVGSVGElement, ChevronsUpDownProps>(
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
      <path d="m7 15 5 5 5-5" />
  <path d="m7 9 5-5 5 5" />
    </svg>
  )
);
ChevronsUpDown.displayName = "ChevronsUpDown";
export const ChevronsUpDownMetadata = { 
  id: "chevrons-up-down", 
  baseId: "chevrons-up-down", 
  variant: "default", 
  name: "Chevrons Up Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronsUpDown;

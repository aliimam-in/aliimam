/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PilcrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pilcrow = React.forwardRef<SVGSVGElement, PilcrowProps>(
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
      <path d="M13 4v16" />
  <path d="M17 4v16" />
  <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </svg>
  )
);
Pilcrow.displayName = "Pilcrow";
export const PilcrowMetadata = { 
  id: "pilcrow", 
  baseId: "pilcrow", 
  variant: "default", 
  name: "Pilcrow", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Pilcrow;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BackpackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Backpack = React.forwardRef<SVGSVGElement, BackpackProps>(
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
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  <path d="M8 10h8" />
  <path d="M8 18h8" />
  <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
  <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  )
);
Backpack.displayName = "Backpack";
export const BackpackMetadata = { 
  id: "backpack", 
  baseId: "backpack", 
  variant: "default", 
  name: "Backpack", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Backpack;

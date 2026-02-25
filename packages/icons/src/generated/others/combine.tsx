/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CombineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Combine = React.forwardRef<SVGSVGElement, CombineProps>(
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
      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="m7 15 3 3" />
  <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
  <rect x="14" y="14" width="7" height="7" rx="1" />
  <rect x="3" y="3" width="7" height="7" rx="1" />
    </svg>
  )
);
Combine.displayName = "Combine";
export const CombineMetadata = { 
  id: "combine", 
  baseId: "combine", 
  variant: "default", 
  name: "Combine", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Combine;

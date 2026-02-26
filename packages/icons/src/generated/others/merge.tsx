/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MergeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Merge = React.forwardRef<SVGSVGElement, MergeProps>(
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
      <path d="m8 6 4-4 4 4" />
  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
  <path d="m20 22-5-5" />
    </svg>
  )
);
Merge.displayName = "Merge";
export const MergeMetadata = { 
  id: "merge", 
  baseId: "merge", 
  variant: "default", 
  name: "Merge", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Merge;

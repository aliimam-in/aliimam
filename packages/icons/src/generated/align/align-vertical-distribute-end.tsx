/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalDistributeEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalDistributeEnd = React.forwardRef<SVGSVGElement, AlignVerticalDistributeEndProps>(
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
      <rect width="14" height="6" x="5" y="14" rx="2" />
  <rect width="10" height="6" x="7" y="4" rx="2" />
  <path d="M2 20h20" />
  <path d="M2 10h20" />
    </svg>
  )
);
AlignVerticalDistributeEnd.displayName = "AlignVerticalDistributeEnd";
export const AlignVerticalDistributeEndMetadata = { 
  id: "align-vertical-distribute-end", 
  baseId: "align-vertical-distribute-end", 
  variant: "default", 
  name: "Align Vertical Distribute End", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignVerticalDistributeEnd;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalSpaceAroundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, AlignHorizontalSpaceAroundProps>(
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
      <rect width="6" height="10" x="9" y="7" rx="2" />
  <path d="M4 22V2" />
  <path d="M20 22V2" />
    </svg>
  )
);
AlignHorizontalSpaceAround.displayName = "AlignHorizontalSpaceAround";
export const AlignHorizontalSpaceAroundMetadata = { 
  id: "align-horizontal-space-around", 
  baseId: "align-horizontal-space-around", 
  variant: "default", 
  name: "Align Horizontal Space Around", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignHorizontalSpaceAround;

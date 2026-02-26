/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalSpaceBetweenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalSpaceBetween = React.forwardRef<SVGSVGElement, AlignHorizontalSpaceBetweenProps>(
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
      <rect width="6" height="14" x="3" y="5" rx="2" />
  <rect width="6" height="10" x="15" y="7" rx="2" />
  <path d="M3 2v20" />
  <path d="M21 2v20" />
    </svg>
  )
);
AlignHorizontalSpaceBetween.displayName = "AlignHorizontalSpaceBetween";
export const AlignHorizontalSpaceBetweenMetadata = { 
  id: "align-horizontal-space-between", 
  baseId: "align-horizontal-space-between", 
  variant: "default", 
  name: "Align Horizontal Space Between", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignHorizontalSpaceBetween;

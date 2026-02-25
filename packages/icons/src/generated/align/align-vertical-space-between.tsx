/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalSpaceBetweenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalSpaceBetween = React.forwardRef<SVGSVGElement, AlignVerticalSpaceBetweenProps>(
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
      <rect width="14" height="6" x="5" y="15" rx="2" />
  <rect width="10" height="6" x="7" y="3" rx="2" />
  <path d="M2 21h20" />
  <path d="M2 3h20" />
    </svg>
  )
);
AlignVerticalSpaceBetween.displayName = "AlignVerticalSpaceBetween";
export const AlignVerticalSpaceBetweenMetadata = { 
  id: "align-vertical-space-between", 
  baseId: "align-vertical-space-between", 
  variant: "default", 
  name: "Align Vertical Space Between", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignVerticalSpaceBetween;

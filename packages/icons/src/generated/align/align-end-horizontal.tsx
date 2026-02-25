/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignEndHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignEndHorizontal = React.forwardRef<SVGSVGElement, AlignEndHorizontalProps>(
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
      <rect width="6" height="16" x="4" y="2" rx="2" />
  <rect width="6" height="9" x="14" y="9" rx="2" />
  <path d="M22 22H2" />
    </svg>
  )
);
AlignEndHorizontal.displayName = "AlignEndHorizontal";
export const AlignEndHorizontalMetadata = { 
  id: "align-end-horizontal", 
  baseId: "align-end-horizontal", 
  variant: "default", 
  name: "Align End Horizontal", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignEndHorizontal;

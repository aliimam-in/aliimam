/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignEndVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignEndVertical = React.forwardRef<SVGSVGElement, AlignEndVerticalProps>(
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
      <rect width="16" height="6" x="2" y="4" rx="2" />
  <rect width="9" height="6" x="9" y="14" rx="2" />
  <path d="M22 22V2" />
    </svg>
  )
);
AlignEndVertical.displayName = "AlignEndVertical";
export const AlignEndVerticalMetadata = { 
  id: "align-end-vertical", 
  baseId: "align-end-vertical", 
  variant: "default", 
  name: "Align End Vertical", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignEndVertical;

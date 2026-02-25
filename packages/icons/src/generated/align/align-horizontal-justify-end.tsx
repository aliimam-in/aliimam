/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalJustifyEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalJustifyEnd = React.forwardRef<SVGSVGElement, AlignHorizontalJustifyEndProps>(
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
      <rect width="6" height="14" x="2" y="5" rx="2" />
  <rect width="6" height="10" x="12" y="7" rx="2" />
  <path d="M22 2v20" />
    </svg>
  )
);
AlignHorizontalJustifyEnd.displayName = "AlignHorizontalJustifyEnd";
export const AlignHorizontalJustifyEndMetadata = { 
  id: "align-horizontal-justify-end", 
  baseId: "align-horizontal-justify-end", 
  variant: "default", 
  name: "Align Horizontal Justify End", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignHorizontalJustifyEnd;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Slice = React.forwardRef<SVGSVGElement, SliceProps>(
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
      <path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" />
    </svg>
  )
);
Slice.displayName = "Slice";
export const SliceMetadata = { 
  id: "slice", 
  baseId: "slice", 
  variant: "default", 
  name: "Slice", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Slice;

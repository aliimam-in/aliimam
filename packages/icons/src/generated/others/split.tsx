/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Split = React.forwardRef<SVGSVGElement, SplitProps>(
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
      <path d="M16 3h5v5" />
  <path d="M8 3H3v5" />
  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
  <path d="m15 9 6-6" />
    </svg>
  )
);
Split.displayName = "Split";
export const SplitMetadata = { 
  id: "split", 
  baseId: "split", 
  variant: "default", 
  name: "Split", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Split;

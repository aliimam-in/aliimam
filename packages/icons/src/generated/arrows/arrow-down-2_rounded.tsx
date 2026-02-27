/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDown2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDown2Rounded = React.forwardRef<SVGSVGElement, ArrowDown2RoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.5V14.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12.5L12 15.5L15 12.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowDown2Rounded.displayName = "ArrowDown2Rounded";
export const ArrowDown2RoundedMetadata = { 
  id: "arrow-down-2_rounded", 
  baseId: "arrow-down-2", 
  variant: "rounded", 
  name: "Arrow Down 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDown2Rounded;

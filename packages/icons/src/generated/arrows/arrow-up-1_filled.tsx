/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp1Filled = React.forwardRef<SVGSVGElement, ArrowUp1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M18.6801 13.98L15.4701 10.77L13.5101 8.79999C12.6801 7.96999 11.3301 7.96999 10.5001 8.79999L5.32007 13.98C4.64007 14.66 5.13007 15.82 6.08007 15.82H11.6901H17.9201C18.8801 15.82 19.3601 14.66 18.6801 13.98Z" fill="currentColor"/>
    </svg>
  )
);
ArrowUp1Filled.displayName = "ArrowUp1Filled";
export const ArrowUp1FilledMetadata = { 
  id: "arrow-up-1_filled", 
  baseId: "arrow-up-1", 
  variant: "filled", 
  name: "Arrow Up 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp1Filled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReceiveSquare2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReceiveSquare2Rounded = React.forwardRef<SVGSVGElement, ReceiveSquare2RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5898 13.34H14.8298V9.10001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8299 13.34L9.16992 7.67999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReceiveSquare2Rounded.displayName = "ReceiveSquare2Rounded";
export const ReceiveSquare2RoundedMetadata = { 
  id: "receive-square-2_rounded", 
  baseId: "receive-square-2", 
  variant: "rounded", 
  name: "Receive Square 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReceiveSquare2Rounded;

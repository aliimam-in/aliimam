/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReceiveSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReceiveSquareRounded = React.forwardRef<SVGSVGElement, ReceiveSquareRoundedProps>(
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
<path d="M9 11.51L12 14.51L15 11.51"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.51V6.50999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReceiveSquareRounded.displayName = "ReceiveSquareRounded";
export const ReceiveSquareRoundedMetadata = { 
  id: "receive-square_rounded", 
  baseId: "receive-square", 
  variant: "rounded", 
  name: "Receive Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReceiveSquareRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SendSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SendSquareRounded = React.forwardRef<SVGSVGElement, SendSquareRoundedProps>(
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
<path d="M9 9.50999L12 6.50999L15 9.50999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6.50999V14.51"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SendSquareRounded.displayName = "SendSquareRounded";
export const SendSquareRoundedMetadata = { 
  id: "send-square_rounded", 
  baseId: "send-square", 
  variant: "rounded", 
  name: "Send Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SendSquareRounded;

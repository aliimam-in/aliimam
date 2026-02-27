/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BackwardItem1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BackwardItem1Rounded = React.forwardRef<SVGSVGElement, BackwardItem1RoundedProps>(
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
      <path d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.38 11V13.62C17.38 16.31 16.31 17.38 13.62 17.38H11V16.15C11 13.9 10.1 13 7.84999 13H6.62V10.38C6.62 7.69 7.68999 6.62 10.38 6.62H13V7.85001C13 10.1 13.9 11 16.15 11H17.38Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BackwardItem1Rounded.displayName = "BackwardItem1Rounded";
export const BackwardItem1RoundedMetadata = { 
  id: "backward-item-1_rounded", 
  baseId: "backward-item-1", 
  variant: "rounded", 
  name: "Backward Item 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BackwardItem1Rounded;

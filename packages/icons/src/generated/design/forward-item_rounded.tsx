/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ForwardItemRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ForwardItemRounded = React.forwardRef<SVGSVGElement, ForwardItemRoundedProps>(
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
      <path d="M17.38 10.38V13.61C17.38 16.3 16.3 17.38 13.61 17.38H10.38C7.68999 17.38 6.60999 16.3 6.60999 13.61V10.38C6.60999 7.69 7.68999 6.60999 10.38 6.60999H13.61C16.31 6.61999 17.38 7.69 17.38 10.38Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 5.76999V9C22 11.69 20.92 12.77 18.23 12.77H17.38V10.39C17.38 7.70001 16.3 6.62 13.61 6.62H11.23V5.76999C11.23 3.07999 12.31 2 15 2H18.23C20.92 2 22 3.07999 22 5.76999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62V13.61C6.62 16.3 7.7 17.38 10.39 17.38H12.77V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ForwardItemRounded.displayName = "ForwardItemRounded";
export const ForwardItemRoundedMetadata = { 
  id: "forward-item_rounded", 
  baseId: "forward-item", 
  variant: "rounded", 
  name: "Forward Item", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ForwardItemRounded;

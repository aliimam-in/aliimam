/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ForwardSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ForwardSquareRounded = React.forwardRef<SVGSVGElement, ForwardSquareRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15.38H10.08C8.38 15.38 7 14 7 12.3C7 10.6 8.38 9.22 10.08 9.22H16.85" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4299 10.77L16.9999 9.19L15.4299 7.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ForwardSquareRounded.displayName = "ForwardSquareRounded";
export const ForwardSquareRoundedMetadata = { 
  id: "forward-square_rounded", 
  baseId: "forward-square", 
  variant: "rounded", 
  name: "Forward Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ForwardSquareRounded;

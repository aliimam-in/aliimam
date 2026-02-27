/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AttachSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AttachSquareRounded = React.forwardRef<SVGSVGElement, AttachSquareRoundedProps>(
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
      <path d="M12.1999 11.8L10.7899 13.21C10.0099 13.99 10.0099 15.26 10.7899 16.04C11.5699 16.82 12.8399 16.82 13.6199 16.04L15.8399 13.82C17.3999 12.26 17.3999 9.72999 15.8399 8.15999C14.2799 6.59999 11.7499 6.59999 10.1799 8.15999L7.75988 10.58C6.41988 11.92 6.41988 14.09 7.75988 15.43"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AttachSquareRounded.displayName = "AttachSquareRounded";
export const AttachSquareRoundedMetadata = { 
  id: "attach-square_rounded", 
  baseId: "attach-square", 
  variant: "rounded", 
  name: "Attach Square", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AttachSquareRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LinkSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LinkSquareRounded = React.forwardRef<SVGSVGElement, LinkSquareRoundedProps>(
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
      <path d="M8.18009 16.02C7.42009 15.95 6.6701 15.6 6.0901 14.99C4.7701 13.6 4.7701 11.32 6.0901 9.92998L8.2801 7.62999C9.6001 6.23999 11.7701 6.23999 13.1001 7.62999C14.4201 9.01999 14.4201 11.3 13.1001 12.69L12.0101 13.84" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8202 7.98001C16.5802 8.05001 17.3302 8.40001 17.9102 9.01001C19.2302 10.4 19.2302 12.68 17.9102 14.07L15.7202 16.37C14.4002 17.76 12.2302 17.76 10.9002 16.37C9.58016 14.98 9.58016 12.7 10.9002 11.31L11.9902 10.16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LinkSquareRounded.displayName = "LinkSquareRounded";
export const LinkSquareRoundedMetadata = { 
  id: "link-square_rounded", 
  baseId: "link-square", 
  variant: "rounded", 
  name: "Link Square", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LinkSquareRounded;

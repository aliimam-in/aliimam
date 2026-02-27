/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CodeRounded = React.forwardRef<SVGSVGElement, CodeRoundedProps>(
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
      <path d="M8.99999 13C8.33999 13.33 7.78999 13.82 7.37999 14.43C7.14999 14.78 7.14999 15.22 7.37999 15.57C7.78999 16.18 8.33999 16.67 8.99999 17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.23001 8.01L21.45 8"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CodeRounded.displayName = "CodeRounded";
export const CodeRoundedMetadata = { 
  id: "code_rounded", 
  baseId: "code", 
  variant: "rounded", 
  name: "Code", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CodeRounded;

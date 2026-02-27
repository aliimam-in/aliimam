/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Shapes1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shapes1Rounded = React.forwardRef<SVGSVGElement, Shapes1RoundedProps>(
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
      <path d="M13.43 15H4.4C2.58 15 1.42 13.05 2.3 11.45L4.63 7.20994L6.81 3.23994C7.72 1.58994 10.1 1.58994 11.01 3.23994L13.2 7.20994L14.25 9.11995L15.53 11.45C16.41 13.05 15.25 15 13.43 15Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Shapes1Rounded.displayName = "Shapes1Rounded";
export const Shapes1RoundedMetadata = { 
  id: "shapes-1_rounded", 
  baseId: "shapes-1", 
  variant: "rounded", 
  name: "Shapes 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shapes1Rounded;

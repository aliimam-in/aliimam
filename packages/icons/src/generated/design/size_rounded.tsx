/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SizeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SizeRounded = React.forwardRef<SVGSVGElement, SizeRoundedProps>(
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
      <path d="M16.97 12.25V16.75C16.97 20.5 15.47 22 11.72 22H7.22C3.47 22 1.97 20.5 1.97 16.75V12.25C1.97 8.5 3.47 7 7.22 7H11.72C15.47 7 16.97 8.5 16.97 12.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.97 5.85V9.15C21.97 11.9 20.87 13 18.12 13H16.97V12.25C16.97 8.5 15.47 7 11.72 7H10.97V5.85C10.97 3.1 12.07 2 14.82 2H18.12C20.87 2 21.97 3.1 21.97 5.85Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SizeRounded.displayName = "SizeRounded";
export const SizeRoundedMetadata = { 
  id: "size_rounded", 
  baseId: "size", 
  variant: "rounded", 
  name: "Size", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SizeRounded;

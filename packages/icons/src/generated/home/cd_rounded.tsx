/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CdRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CdRounded = React.forwardRef<SVGSVGElement, CdRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.75 12.75C11.8546 12.75 12.75 11.8546 12.75 10.75C12.75 9.64543 11.8546 8.75 10.75 8.75C9.64543 8.75 8.75 9.64543 8.75 10.75C8.75 11.8546 9.64543 12.75 10.75 12.75Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CdRounded.displayName = "CdRounded";
export const CdRoundedMetadata = { 
  id: "cd_rounded", 
  baseId: "cd", 
  variant: "rounded", 
  name: "Cd", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 22 22" 
} as const;

export default CdRounded;

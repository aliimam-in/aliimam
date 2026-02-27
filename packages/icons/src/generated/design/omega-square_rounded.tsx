/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OmegaSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OmegaSquareRounded = React.forwardRef<SVGSVGElement, OmegaSquareRoundedProps>(
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
      <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16.75H13.9L15.52 14.96C16.32 14.07 16.76 12.94 16.76 11.78C16.76 10.58 16.26 9.43002 15.37 8.58002C14.48 7.73002 13.27 7.25 12 7.25C10.74 7.25 9.53 7.73002 8.63 8.58002C7.74 9.43002 7.23999 10.58 7.23999 11.78C7.23999 12.95 7.67998 14.08 8.47998 14.96L10.1 16.75H7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
OmegaSquareRounded.displayName = "OmegaSquareRounded";
export const OmegaSquareRoundedMetadata = { 
  id: "omega-square_rounded", 
  baseId: "omega-square", 
  variant: "rounded", 
  name: "Omega Square", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OmegaSquareRounded;

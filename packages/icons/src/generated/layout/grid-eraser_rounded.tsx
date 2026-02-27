/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GridEraserRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GridEraserRounded = React.forwardRef<SVGSVGElement, GridEraserRoundedProps>(
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
      <path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03003 8.5H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03003 15.5H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.51001 21.99V2.01001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.51 11.99V2.01001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.8 19.7L16.9 21.6C16.38 22.12 15.52 22.12 14.99 21.6L13.41 20.01C12.89 19.49 12.89 18.63 13.41 18.1L15.31 16.21L18.8 19.7Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.61 16.9L18.8 19.7099L15.3 16.2099L18.11 13.39C18.63 12.87 19.5 12.87 20.02 13.39L21.6 14.98C22.13 15.51 22.13 16.38 21.61 16.9Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GridEraserRounded.displayName = "GridEraserRounded";
export const GridEraserRoundedMetadata = { 
  id: "grid-eraser_rounded", 
  baseId: "grid-eraser", 
  variant: "rounded", 
  name: "Grid Eraser", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GridEraserRounded;

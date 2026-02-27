/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRounded = React.forwardRef<SVGSVGElement, SquareRoundedProps>(
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
<path d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.77V12.32" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SquareRounded.displayName = "SquareRounded";
export const SquareRoundedMetadata = { 
  id: "square_rounded", 
  baseId: "square", 
  variant: "rounded", 
  name: "Square", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRounded;

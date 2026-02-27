/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrushSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrushSquareRounded = React.forwardRef<SVGSVGElement, TrushSquareRoundedProps>(
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
<path d="M17.9 9.05C15.72 8.83 13.52 8.72 11.33 8.72C10.03 8.72 8.73 8.79 7.44 8.92L6.10001 9.05" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.71002 8.39L9.85002 7.53C9.95002 6.91 10.03 6.44 11.14 6.44H12.86C13.97 6.44 14.05 6.93 14.15 7.53L14.29 8.38" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.49 9.13L16.06 15.73C15.99 16.76 15.93 17.56 14.1 17.56H9.89C8.06 17.56 7.99999 16.76 7.92999 15.73L7.5 9.13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TrushSquareRounded.displayName = "TrushSquareRounded";
export const TrushSquareRoundedMetadata = { 
  id: "trush-square_rounded", 
  baseId: "trush-square", 
  variant: "rounded", 
  name: "Trush Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrushSquareRounded;

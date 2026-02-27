/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Brush3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Brush3Rounded = React.forwardRef<SVGSVGElement, Brush3RoundedProps>(
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
      <path d="M10 16C10 14.34 10 13 13 13H17C20 13 20 12 20 10V8C20 6 20 5 17 5H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2H8.00001C7.35001 3.95 7.35001 6.05 8.00001 8H12C12.65 6.05 12.65 3.95 12 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 2H7C5 2 4 3 4 5C4 7 5 8 7 8H8C7 6 7 4 8 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 2H12C13 4 13 6 12 8H13C15 8 16 7 16 5C16 3 15 2 13 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 22H10.5C12 22 12 21 12 20.5V17.5C12 17 12 16 10.5 16H9.5C8 16 8 17 8 17.5V20.5C8 21 8 22 9.5 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Brush3Rounded.displayName = "Brush3Rounded";
export const Brush3RoundedMetadata = { 
  id: "brush-3_rounded", 
  baseId: "brush-3", 
  variant: "rounded", 
  name: "Brush 3", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Brush3Rounded;

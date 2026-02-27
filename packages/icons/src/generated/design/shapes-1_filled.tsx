/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Shapes1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shapes1Filled = React.forwardRef<SVGSVGElement, Shapes1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z" fill="currentColor"/>
<path d="M21.88 6.33008C22.4046 8.88967 21.1622 11.212 19.1592 12.3057C18.8515 12.4737 18.5 12.2341 18.5 11.8836V11.7501C18.5 8.31008 15.69 5.50008 12.25 5.50008H12.1165C11.766 5.50008 11.5264 5.14855 11.6943 4.84094C12.7881 2.83786 15.1104 1.5955 17.67 2.12008C19.76 2.55008 21.45 4.24008 21.88 6.33008Z" fill="currentColor"/>
    </svg>
  )
);
Shapes1Filled.displayName = "Shapes1Filled";
export const Shapes1FilledMetadata = { 
  id: "shapes-1_filled", 
  baseId: "shapes-1", 
  variant: "filled", 
  name: "Shapes 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shapes1Filled;

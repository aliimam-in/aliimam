/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Simcard1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Simcard1Rounded = React.forwardRef<SVGSVGElement, Simcard1RoundedProps>(
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
      <path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9.5V18.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 14H16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Simcard1Rounded.displayName = "Simcard1Rounded";
export const Simcard1RoundedMetadata = { 
  id: "simcard-1_rounded", 
  baseId: "simcard-1", 
  variant: "rounded", 
  name: "Simcard 1", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Simcard1Rounded;

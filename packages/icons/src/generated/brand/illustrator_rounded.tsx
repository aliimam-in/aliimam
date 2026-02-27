/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IllustratorRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IllustratorRounded = React.forwardRef<SVGSVGElement, IllustratorRoundedProps>(
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
      <path d="M6.69995 16L10.2 8L13.8 16" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 13.3H12.9" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M16.3 16V10.7" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.3401 8.03412V8.03412" stroke="#17191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
IllustratorRounded.displayName = "IllustratorRounded";
export const IllustratorRoundedMetadata = { 
  id: "illustrator_rounded", 
  baseId: "illustrator", 
  variant: "rounded", 
  name: "Illustrator", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default IllustratorRounded;

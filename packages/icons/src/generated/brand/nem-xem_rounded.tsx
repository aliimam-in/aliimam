/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NemXemRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NemXemRounded = React.forwardRef<SVGSVGElement, NemXemRoundedProps>(
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
      <path d="M2 4.99998C2 4.99998 12 -1.00002 22 4.99998C22 4.99998 22 16 12 22C12 22 2 17 2 4.99998Z"   strokeMiterlimit="10"/>
<path d="M2.1001 7.09999C5.2001 17.1 12.0001 9.99999 12.0001 9.99999C11.0001 3.99999 16.1001 2.89999 16.1001 2.89999L16.7001 2.79999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4 18.5C16.4 18.5 19 13 12 10"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NemXemRounded.displayName = "NemXemRounded";
export const NemXemRoundedMetadata = { 
  id: "nem-xem_rounded", 
  baseId: "nem-xem", 
  variant: "rounded", 
  name: "Nem Xem", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NemXemRounded;

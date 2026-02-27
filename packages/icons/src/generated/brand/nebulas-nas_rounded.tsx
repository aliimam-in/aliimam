/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NebulasNasRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NebulasNasRounded = React.forwardRef<SVGSVGElement, NebulasNasRoundedProps>(
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
      <path d="M12 5.20001L9.5 13.2L14.5 10.8L12 5.20001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1 11L18 12.2L13.5 14.8L13.1 14.6L6 12.2L10 10.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15.2L12 18.2L9.5 13.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NebulasNasRounded.displayName = "NebulasNasRounded";
export const NebulasNasRoundedMetadata = { 
  id: "nebulas-nas_rounded", 
  baseId: "nebulas-nas", 
  variant: "rounded", 
  name: "Nebulas Nas", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NebulasNasRounded;

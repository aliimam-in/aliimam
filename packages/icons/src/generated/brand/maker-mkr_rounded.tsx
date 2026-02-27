/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MakerMkrRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MakerMkrRounded = React.forwardRef<SVGSVGElement, MakerMkrRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.6001 14.5V9.5L10.8001 12V14.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4002 14.5V9.5L13.2002 12V14.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MakerMkrRounded.displayName = "MakerMkrRounded";
export const MakerMkrRoundedMetadata = { 
  id: "maker-mkr_rounded", 
  baseId: "maker-mkr", 
  variant: "rounded", 
  name: "Maker Mkr", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MakerMkrRounded;

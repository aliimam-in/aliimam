/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DaiDaiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DaiDaiRounded = React.forwardRef<SVGSVGElement, DaiDaiRoundedProps>(
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
<path d="M8 7V17H12C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7H8Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10H18.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 14H18.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DaiDaiRounded.displayName = "DaiDaiRounded";
export const DaiDaiRoundedMetadata = { 
  id: "dai-dai_rounded", 
  baseId: "dai-dai", 
  variant: "rounded", 
  name: "Dai Dai", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DaiDaiRounded;

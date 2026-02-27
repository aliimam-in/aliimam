/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DribbbleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DribbbleRounded = React.forwardRef<SVGSVGElement, DribbbleRoundedProps>(
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
      <path d="M18.5 4.78998C15.9 9.33998 10.89 11.95 5.67 11.48L2.5 11.19"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 19.37C8.1 14.82 13.11 12.21 18.33 12.68L21.5 12.97"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.62988 3L10.8099 6.95C12.9399 9.59 14.4499 12.66 15.2499 15.95L16.4599 20.94"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DribbbleRounded.displayName = "DribbbleRounded";
export const DribbbleRoundedMetadata = { 
  id: "dribbble_rounded", 
  baseId: "dribbble", 
  variant: "rounded", 
  name: "Dribbble", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DribbbleRounded;

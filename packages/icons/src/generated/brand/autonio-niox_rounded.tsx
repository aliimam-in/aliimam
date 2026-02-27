/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AutonioNioxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AutonioNioxRounded = React.forwardRef<SVGSVGElement, AutonioNioxRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
<path d="M11.9999 5.90002L9.3999 10.1H14.5999L11.9999 5.90002Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.6 11.9L6 16.1H11.1L8.6 11.9Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3999 11.9L12.8999 16.1H17.9999L15.3999 11.9Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AutonioNioxRounded.displayName = "AutonioNioxRounded";
export const AutonioNioxRoundedMetadata = { 
  id: "autonio-niox_rounded", 
  baseId: "autonio-niox", 
  variant: "rounded", 
  name: "Autonio Niox", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AutonioNioxRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EmercoinEmcRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EmercoinEmcRounded = React.forwardRef<SVGSVGElement, EmercoinEmcRoundedProps>(
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
<path d="M7.5 8H16.5V16H7.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 12H12.5V8"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
EmercoinEmcRounded.displayName = "EmercoinEmcRounded";
export const EmercoinEmcRoundedMetadata = { 
  id: "emercoin-emc_rounded", 
  baseId: "emercoin-emc", 
  variant: "rounded", 
  name: "Emercoin Emc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EmercoinEmcRounded;

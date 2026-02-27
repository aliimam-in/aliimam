/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AugurRepRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AugurRepRounded = React.forwardRef<SVGSVGElement, AugurRepRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M9 11L11.5 6H12.5L15 11" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13L7 15L12 18L17 15L16 13" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AugurRepRounded.displayName = "AugurRepRounded";
export const AugurRepRoundedMetadata = { 
  id: "augur-rep_rounded", 
  baseId: "augur-rep", 
  variant: "rounded", 
  name: "Augur Rep", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AugurRepRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LitecoinltcRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LitecoinltcRounded = React.forwardRef<SVGSVGElement, LitecoinltcRoundedProps>(
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
      <path d="M11.6 6.40002H14.1L12 14.3H16.2L15.7 17.1H8L11 6.40002H11.6Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11L7.30005 12.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LitecoinltcRounded.displayName = "LitecoinltcRounded";
export const LitecoinltcRoundedMetadata = { 
  id: "litecoinltc_rounded", 
  baseId: "litecoinltc", 
  variant: "rounded", 
  name: "Litecoinltc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LitecoinltcRounded;

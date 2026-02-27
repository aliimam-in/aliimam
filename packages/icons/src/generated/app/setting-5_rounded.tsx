/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Setting5RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Setting5Rounded = React.forwardRef<SVGSVGElement, Setting5RoundedProps>(
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
      <path d="M19 22V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 7V2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V17"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 7V2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11H7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11H21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13H14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Setting5Rounded.displayName = "Setting5Rounded";
export const Setting5RoundedMetadata = { 
  id: "setting-5_rounded", 
  baseId: "setting-5", 
  variant: "rounded", 
  name: "Setting 5", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Setting5Rounded;

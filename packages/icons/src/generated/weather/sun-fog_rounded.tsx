/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SunFogRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SunFogRounded = React.forwardRef<SVGSVGElement, SunFogRoundedProps>(
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
      <path d="M18.5 12C18.5 8.41 15.59 5.5 12 5.5C8.41 5.5 5.5 8.41 5.5 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.98999 4.98999L4.85999 4.85999M19.01 4.98999L19.14 4.85999L19.01 4.98999ZM12 2.07999V2V2.07999ZM2.08002 12H2H2.08002ZM22 12H21.92H22Z" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15H20" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18H18" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21H15" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SunFogRounded.displayName = "SunFogRounded";
export const SunFogRoundedMetadata = { 
  id: "sun-fog_rounded", 
  baseId: "sun-fog", 
  variant: "rounded", 
  name: "Sun Fog", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SunFogRounded;

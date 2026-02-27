/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeCrossRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeCrossRounded = React.forwardRef<SVGSVGElement, VolumeCrossRoundedProps>(
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
      <path d="M2 10.1595V14.1595C2 16.1595 3 17.1595 5 17.1595H6.43C6.8 17.1595 7.17 17.2695 7.49 17.4595L10.41 19.2895C12.93 20.8695 15 19.7195 15 16.7495V7.56946C15 4.58946 12.93 3.44946 10.41 5.02946L7.49 6.85946C7.17 7.04946 6.8 7.15946 6.43 7.15946H5C3 7.15946 2 8.15946 2 10.1595Z"  />
<path d="M22 14.1194L18.04 10.1594"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.96 10.1995L18 14.1595"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VolumeCrossRounded.displayName = "VolumeCrossRounded";
export const VolumeCrossRoundedMetadata = { 
  id: "volume-cross_rounded", 
  baseId: "volume-cross", 
  variant: "rounded", 
  name: "Volume Cross", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeCrossRounded;

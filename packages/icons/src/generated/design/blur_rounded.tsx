/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BlurRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BlurRounded = React.forwardRef<SVGSVGElement, BlurRoundedProps>(
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
      <path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49001 3.66 3.87997 8.39 3.90997 13.9C3.90997 18.36 7.54001 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z"   strokeMiterlimit="10"/>
<path d="M12 2V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.96L19.7 15.22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13.96L19.37 10.38"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.96001L17.03 6.51001"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BlurRounded.displayName = "BlurRounded";
export const BlurRoundedMetadata = { 
  id: "blur_rounded", 
  baseId: "blur", 
  variant: "rounded", 
  name: "Blur", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BlurRounded;

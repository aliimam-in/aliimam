/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CropRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CropRounded = React.forwardRef<SVGSVGElement, CropRoundedProps>(
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
      <path d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5V14.1C5 18 6 19 9.9 19Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5V2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5H2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19V22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CropRounded.displayName = "CropRounded";
export const CropRoundedMetadata = { 
  id: "crop_rounded", 
  baseId: "crop", 
  variant: "rounded", 
  name: "Crop", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CropRounded;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CropFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CropFilled = React.forwardRef<SVGSVGElement, CropFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill="currentColor"/>
<path d="M21.25 17.72H18.47C18.06 17.72 17.72 18.06 17.72 18.47V21.25C17.72 21.66 18.06 22 18.47 22C18.88 22 19.22 21.66 19.22 21.25V19.22H21.25C21.66 19.22 22 18.88 22 18.47C22 18.06 21.66 17.72 21.25 17.72Z" fill="currentColor"/>
<path d="M16.72 18.4701C16.72 17.5101 17.51 16.7201 18.47 16.7201H19.16V10.0501C19.16 7.16007 16.82 4.82007 13.93 4.82007H7.28002V5.51007C7.28002 6.47007 6.49002 7.26007 5.53002 7.26007H4.83002V13.9301C4.83002 16.8201 7.17002 19.1601 10.06 19.1601H16.73V18.4701H16.72Z" fill="currentColor"/>
    </svg>
  )
);
CropFilled.displayName = "CropFilled";
export const CropFilledMetadata = { 
  id: "crop_filled", 
  baseId: "crop", 
  variant: "filled", 
  name: "Crop", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CropFilled;

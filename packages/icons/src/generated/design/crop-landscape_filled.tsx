/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CropLandscapeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CropLandscapeFilled = React.forwardRef<SVGSVGElement, CropLandscapeFilledProps>(
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
      <path d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
CropLandscapeFilled.displayName = "CropLandscapeFilled";
export const CropLandscapeFilledMetadata = { 
  id: "crop-landscape_filled", 
  baseId: "crop-landscape", 
  variant: "filled", 
  name: "Crop Landscape", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CropLandscapeFilled;

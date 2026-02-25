/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CropPortraitFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CropPortraitFilled = React.forwardRef<SVGSVGElement, CropPortraitFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
CropPortraitFilled.displayName = "CropPortraitFilled";
export const CropPortraitFilledMetadata = { id: "crop-portrait_filled", baseId: "crop-portrait", variant: "filled", name: "Crop Portrait", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CropPortraitFilled;

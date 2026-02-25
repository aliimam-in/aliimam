/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CropProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crop = React.forwardRef<SVGSVGElement, CropProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
  <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  )
);
Crop.displayName = "Crop";
export const CropMetadata = { id: "crop", baseId: "crop", variant: "default", name: "Crop", category: "design", tags: [], viewBox: "0 0 24 24" } as const;
export default Crop;

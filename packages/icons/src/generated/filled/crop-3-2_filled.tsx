/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Crop32FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crop32Filled = React.forwardRef<SVGSVGElement, Crop32FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
Crop32Filled.displayName = "Crop32Filled";
export const Crop32FilledMetadata = { id: "crop-3-2_filled", baseId: "crop-3-2", variant: "filled", name: "Crop 3 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default Crop32Filled;

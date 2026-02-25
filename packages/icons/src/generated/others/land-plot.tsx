/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LandPlotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LandPlot = React.forwardRef<SVGSVGElement, LandPlotProps>(
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
      <path d="m12 8 6-3-6-3v10" />
  <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
  <path d="m6.49 12.85 11.02 6.3" />
  <path d="M17.51 12.85 6.5 19.15" />
    </svg>
  )
);
LandPlot.displayName = "LandPlot";
export const LandPlotMetadata = { 
  id: "land-plot", 
  baseId: "land-plot", 
  variant: "default", 
  name: "Land Plot", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LandPlot;

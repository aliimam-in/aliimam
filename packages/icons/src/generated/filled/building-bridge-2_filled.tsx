/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BuildingBridge2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BuildingBridge2Filled = React.forwardRef<SVGSVGElement, BuildingBridge2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 6a3 3 0 0 1 3 3v9a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2a3 3 0 0 0 -6 0v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-9a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
BuildingBridge2Filled.displayName = "BuildingBridge2Filled";
export const BuildingBridge2FilledMetadata = { id: "building-bridge-2_filled", baseId: "building-bridge-2", variant: "filled", name: "Building Bridge 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BuildingBridge2Filled;

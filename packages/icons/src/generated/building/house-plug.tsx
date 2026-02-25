/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HousePlugProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HousePlug = React.forwardRef<SVGSVGElement, HousePlugProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 12V8.964" />
  <path d="M14 12V8.964" />
  <path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
  <path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
);
HousePlug.displayName = "HousePlug";
export const HousePlugMetadata = { id: "house-plug", baseId: "house-plug", variant: "default", name: "House Plug", category: "building", tags: [], viewBox: "0 0 24 24" } as const;
export default HousePlug;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiamondPercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiamondPercent = React.forwardRef<SVGSVGElement, DiamondPercentProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
  <path d="M9.2 9.2h.01" />
  <path d="m14.5 9.5-5 5" />
  <path d="M14.7 14.8h.01" />
    </svg>
  )
);
DiamondPercent.displayName = "DiamondPercent";
export const DiamondPercentMetadata = { id: "diamond-percent", baseId: "diamond-percent", variant: "default", name: "Diamond Percent", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default DiamondPercent;

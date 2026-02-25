/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BandageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bandage = React.forwardRef<SVGSVGElement, BandageProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 10.01h.01" />
  <path d="M10 14.01h.01" />
  <path d="M14 10.01h.01" />
  <path d="M14 14.01h.01" />
  <path d="M18 6v12" />
  <path d="M6 6v12" />
  <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  )
);
Bandage.displayName = "Bandage";
export const BandageMetadata = { id: "bandage", baseId: "bandage", variant: "default", name: "Bandage", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Bandage;

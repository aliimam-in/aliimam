/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HelicopterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Helicopter = React.forwardRef<SVGSVGElement, HelicopterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 17v4" />
  <path d="M14 3v8a2 2 0 0 0 2 2h5.865" />
  <path d="M17 17v4" />
  <path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" />
  <path d="M2 10v5" />
  <path d="M6 3h16" />
  <path d="M7 21h14" />
  <path d="M8 13H2" />
    </svg>
  )
);
Helicopter.displayName = "Helicopter";
export const HelicopterMetadata = { id: "helicopter", baseId: "helicopter", variant: "default", name: "Helicopter", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Helicopter;

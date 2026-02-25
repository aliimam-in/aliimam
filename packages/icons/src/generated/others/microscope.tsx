/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicroscopeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Microscope = React.forwardRef<SVGSVGElement, MicroscopeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 18h8" />
  <path d="M3 22h18" />
  <path d="M14 22a7 7 0 1 0 0-14h-1" />
  <path d="M9 14h2" />
  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
);
Microscope.displayName = "Microscope";
export const MicroscopeMetadata = { id: "microscope", baseId: "microscope", variant: "default", name: "Microscope", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Microscope;

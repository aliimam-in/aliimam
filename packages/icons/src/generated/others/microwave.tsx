/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicrowaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Microwave = React.forwardRef<SVGSVGElement, MicrowaveProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="20" height="15" x="2" y="4" rx="2" />
  <rect width="8" height="7" x="6" y="8" rx="1" />
  <path d="M18 8v7" />
  <path d="M6 19v2" />
  <path d="M18 19v2" />
    </svg>
  )
);
Microwave.displayName = "Microwave";
export const MicrowaveMetadata = { id: "microwave", baseId: "microwave", variant: "default", name: "Microwave", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Microwave;

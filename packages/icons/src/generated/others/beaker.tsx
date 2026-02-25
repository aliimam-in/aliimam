/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Beaker = React.forwardRef<SVGSVGElement, BeakerProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4.5 3h15" />
  <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
  <path d="M6 14h12" />
    </svg>
  )
);
Beaker.displayName = "Beaker";
export const BeakerMetadata = { id: "beaker", baseId: "beaker", variant: "default", name: "Beaker", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Beaker;

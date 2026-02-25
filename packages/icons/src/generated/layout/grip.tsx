/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GripProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grip = React.forwardRef<SVGSVGElement, GripProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="5" r="1" />
  <circle cx="19" cy="5" r="1" />
  <circle cx="5" cy="5" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="19" cy="19" r="1" />
  <circle cx="5" cy="19" r="1" />
    </svg>
  )
);
Grip.displayName = "Grip";
export const GripMetadata = { id: "grip", baseId: "grip", variant: "default", name: "Grip", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Grip;

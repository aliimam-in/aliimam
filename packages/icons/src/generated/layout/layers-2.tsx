/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Layers2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Layers2 = React.forwardRef<SVGSVGElement, Layers2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
  <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
    </svg>
  )
);
Layers2.displayName = "Layers2";
export const Layers2Metadata = { id: "layers-2", baseId: "layers-2", variant: "default", name: "Layers 2", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Layers2;

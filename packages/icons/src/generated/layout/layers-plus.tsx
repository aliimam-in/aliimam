/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayersPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayersPlus = React.forwardRef<SVGSVGElement, LayersPlusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" />
  <path d="M16 17h6" />
  <path d="M19 14v6" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" />
    </svg>
  )
);
LayersPlus.displayName = "LayersPlus";
export const LayersPlusMetadata = { id: "layers-plus", baseId: "layers-plus", variant: "default", name: "Layers Plus", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default LayersPlus;

/**
 * Auto-generated logo component: Layers Intersect 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersIntersect2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersIntersect2OutlineLogo = React.forwardRef<SVGSVGElement, LayersIntersect2OutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M4 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M9 15l6 -6" />
    </svg>
  )
);

LayersIntersect2OutlineLogo.displayName = "LayersIntersect2OutlineLogo";

export const LayersIntersect2OutlineLogoMetadata = {
  id: "layers-intersect-2-outline",
  baseId: "layers-intersect-2-outline",
  variant: "default",
  name: "Layers Intersect 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersIntersect2OutlineLogo;

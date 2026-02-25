/**
 * Auto-generated logo component: Layers Difference Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersDifferenceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersDifferenceOutlineLogo = React.forwardRef<SVGSVGElement, LayersDifferenceOutlineLogoProps>(
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
      <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
  <path d="M10 8l-2 0l0 2" />
  <path d="M8 14l0 2l2 0" />
  <path d="M14 8l2 0l0 2" />
  <path d="M16 14l0 2l-2 0" />
    </svg>
  )
);

LayersDifferenceOutlineLogo.displayName = "LayersDifferenceOutlineLogo";

export const LayersDifferenceOutlineLogoMetadata = {
  id: "layers-difference-outline",
  baseId: "layers-difference-outline",
  variant: "default",
  name: "Layers Difference Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersDifferenceOutlineLogo;

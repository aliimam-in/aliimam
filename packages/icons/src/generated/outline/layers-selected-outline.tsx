/**
 * Auto-generated logo component: Layers Selected Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersSelectedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersSelectedOutlineLogo = React.forwardRef<SVGSVGElement, LayersSelectedOutlineLogoProps>(
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
      <path d="M8 10.5l6.492 -6.492" />
  <path d="M13.496 16l6.504 -6.504l-6.504 6.504" />
  <path d="M8.586 15.414l10.827 -10.827" />
  <path d="M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

LayersSelectedOutlineLogo.displayName = "LayersSelectedOutlineLogo";

export const LayersSelectedOutlineLogoMetadata = {
  id: "layers-selected-outline",
  baseId: "layers-selected-outline",
  variant: "default",
  name: "Layers Selected Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersSelectedOutlineLogo;

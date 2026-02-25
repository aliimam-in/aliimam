/**
 * Auto-generated logo component: Layers Selected Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersSelectedBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersSelectedBottomOutlineLogo = React.forwardRef<SVGSVGElement, LayersSelectedBottomOutlineLogoProps>(
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
      <path d="M4 14.5l4 -4" />
  <path d="M9.496 20l4.004 -4l-4.004 4" />
  <path d="M4.586 19.414l3.914 -3.914" />
  <path d="M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

LayersSelectedBottomOutlineLogo.displayName = "LayersSelectedBottomOutlineLogo";

export const LayersSelectedBottomOutlineLogoMetadata = {
  id: "layers-selected-bottom-outline",
  baseId: "layers-selected-bottom-outline",
  variant: "default",
  name: "Layers Selected Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersSelectedBottomOutlineLogo;

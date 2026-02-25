/**
 * Auto-generated logo component: Augmented Reality Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AugmentedRealityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AugmentedRealityOutlineLogo = React.forwardRef<SVGSVGElement, AugmentedRealityOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M12 12.5l4 -2.5" />
  <path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5l-4 2.5" />
  <path d="M8 10v4.5l4 2.5" />
    </svg>
  )
);

AugmentedRealityOutlineLogo.displayName = "AugmentedRealityOutlineLogo";

export const AugmentedRealityOutlineLogoMetadata = {
  id: "augmented-reality-outline",
  baseId: "augmented-reality-outline",
  variant: "default",
  name: "Augmented Reality Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AugmentedRealityOutlineLogo;

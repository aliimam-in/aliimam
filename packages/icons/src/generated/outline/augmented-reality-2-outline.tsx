/**
 * Auto-generated logo component: Augmented Reality 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AugmentedReality2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AugmentedReality2OutlineLogo = React.forwardRef<SVGSVGElement, AugmentedReality2OutlineLogoProps>(
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
      <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
  <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5l0 -4.5" />
  <path d="M13 14.5v4.5l4 2.5" />
  <path d="M17 17l4 -2.5" />
  <path d="M11 4h2" />
    </svg>
  )
);

AugmentedReality2OutlineLogo.displayName = "AugmentedReality2OutlineLogo";

export const AugmentedReality2OutlineLogoMetadata = {
  id: "augmented-reality-2-outline",
  baseId: "augmented-reality-2-outline",
  variant: "default",
  name: "Augmented Reality 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AugmentedReality2OutlineLogo;

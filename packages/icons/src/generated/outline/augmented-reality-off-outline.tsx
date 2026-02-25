/**
 * Auto-generated logo component: Augmented Reality Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AugmentedRealityOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AugmentedRealityOffOutlineLogo = React.forwardRef<SVGSVGElement, AugmentedRealityOffOutlineLogoProps>(
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
      <path d="M4 8v-2c0 -.557 .228 -1.061 .595 -1.424" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2c.558 0 1.062 -.228 1.425 -.596" />
  <path d="M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769" />
  <path d="M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189" />
  <path d="M8 10v4.5l4 2.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AugmentedRealityOffOutlineLogo.displayName = "AugmentedRealityOffOutlineLogo";

export const AugmentedRealityOffOutlineLogoMetadata = {
  id: "augmented-reality-off-outline",
  baseId: "augmented-reality-off-outline",
  variant: "default",
  name: "Augmented Reality Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AugmentedRealityOffOutlineLogo;

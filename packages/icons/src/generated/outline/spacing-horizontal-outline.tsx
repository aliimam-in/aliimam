/**
 * Auto-generated logo component: Spacing Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpacingHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpacingHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, SpacingHorizontalOutlineLogoProps>(
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
      <path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" />
  <path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M12 8v8" />
    </svg>
  )
);

SpacingHorizontalOutlineLogo.displayName = "SpacingHorizontalOutlineLogo";

export const SpacingHorizontalOutlineLogoMetadata = {
  id: "spacing-horizontal-outline",
  baseId: "spacing-horizontal-outline",
  variant: "default",
  name: "Spacing Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpacingHorizontalOutlineLogo;

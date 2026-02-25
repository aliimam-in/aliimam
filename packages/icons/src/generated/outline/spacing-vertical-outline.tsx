/**
 * Auto-generated logo component: Spacing Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpacingVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpacingVerticalOutlineLogo = React.forwardRef<SVGSVGElement, SpacingVerticalOutlineLogoProps>(
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
      <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M16 12h-8" />
    </svg>
  )
);

SpacingVerticalOutlineLogo.displayName = "SpacingVerticalOutlineLogo";

export const SpacingVerticalOutlineLogoMetadata = {
  id: "spacing-vertical-outline",
  baseId: "spacing-vertical-outline",
  variant: "default",
  name: "Spacing Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpacingVerticalOutlineLogo;

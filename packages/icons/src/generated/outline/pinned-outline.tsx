/**
 * Auto-generated logo component: Pinned Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PinnedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PinnedOutlineLogo = React.forwardRef<SVGSVGElement, PinnedOutlineLogoProps>(
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
      <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <path d="M12 16l0 5" />
  <path d="M8 4l8 0" />
    </svg>
  )
);

PinnedOutlineLogo.displayName = "PinnedOutlineLogo";

export const PinnedOutlineLogoMetadata = {
  id: "pinned-outline",
  baseId: "pinned-outline",
  variant: "default",
  name: "Pinned Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PinnedOutlineLogo;

/**
 * Auto-generated logo component: Screen Share Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScreenShareOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScreenShareOffOutlineLogo = React.forwardRef<SVGSVGElement, ScreenShareOffOutlineLogoProps>(
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
      <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
  <path d="M7 20l10 0" />
  <path d="M9 16l0 4" />
  <path d="M15 16l0 4" />
  <path d="M17 8l4 -4m-4 0l4 4" />
    </svg>
  )
);

ScreenShareOffOutlineLogo.displayName = "ScreenShareOffOutlineLogo";

export const ScreenShareOffOutlineLogoMetadata = {
  id: "screen-share-off-outline",
  baseId: "screen-share-off-outline",
  variant: "default",
  name: "Screen Share Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScreenShareOffOutlineLogo;

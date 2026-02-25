/**
 * Auto-generated logo component: Screen Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScreenShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScreenShareOutlineLogo = React.forwardRef<SVGSVGElement, ScreenShareOutlineLogoProps>(
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
  <path d="M17 4h4v4" />
  <path d="M16 9l5 -5" />
    </svg>
  )
);

ScreenShareOutlineLogo.displayName = "ScreenShareOutlineLogo";

export const ScreenShareOutlineLogoMetadata = {
  id: "screen-share-outline",
  baseId: "screen-share-outline",
  variant: "default",
  name: "Screen Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScreenShareOutlineLogo;

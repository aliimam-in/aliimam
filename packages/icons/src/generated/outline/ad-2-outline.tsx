/**
 * Auto-generated logo component: Ad 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ad2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ad2OutlineLogo = React.forwardRef<SVGSVGElement, Ad2OutlineLogoProps>(
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
      <path d="M11.933 5h-6.933v16h13v-8" />
  <path d="M14 17h-5" />
  <path d="M9 13h5v-4h-5v4" />
  <path d="M15 5v-2" />
  <path d="M18 6l2 -2" />
  <path d="M19 9h2" />
    </svg>
  )
);

Ad2OutlineLogo.displayName = "Ad2OutlineLogo";

export const Ad2OutlineLogoMetadata = {
  id: "ad-2-outline",
  baseId: "ad-2-outline",
  variant: "default",
  name: "Ad 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ad2OutlineLogo;

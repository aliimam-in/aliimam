/**
 * Auto-generated logo component: Sprout (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SproutLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SproutLogo = React.forwardRef<SVGSVGElement, SproutLogoProps>(
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
      <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
  <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
  <path d="M5 21h14" />
    </svg>
  )
);

SproutLogo.displayName = "SproutLogo";

export const SproutLogoMetadata = {
  id: "sprout",
  baseId: "sprout",
  variant: "default",
  name: "Sprout",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SproutLogo;

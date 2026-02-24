/**
 * Auto-generated logo component: Separator Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeparatorHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeparatorHorizontalLogo = React.forwardRef<SVGSVGElement, SeparatorHorizontalLogoProps>(
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
      <path d="m16 16-4 4-4-4" />
  <path d="M3 12h18" />
  <path d="m8 8 4-4 4 4" />
    </svg>
  )
);

SeparatorHorizontalLogo.displayName = "SeparatorHorizontalLogo";

export const SeparatorHorizontalLogoMetadata = {
  id: "separator-horizontal",
  baseId: "separator-horizontal",
  variant: "default",
  name: "Separator Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeparatorHorizontalLogo;

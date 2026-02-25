/**
 * Auto-generated logo component: Separator Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeparatorHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeparatorHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, SeparatorHorizontalOutlineLogoProps>(
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
      <path d="M4 12l16 0" />
  <path d="M8 8l4 -4l4 4" />
  <path d="M16 16l-4 4l-4 -4" />
    </svg>
  )
);

SeparatorHorizontalOutlineLogo.displayName = "SeparatorHorizontalOutlineLogo";

export const SeparatorHorizontalOutlineLogoMetadata = {
  id: "separator-horizontal-outline",
  baseId: "separator-horizontal-outline",
  variant: "default",
  name: "Separator Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeparatorHorizontalOutlineLogo;

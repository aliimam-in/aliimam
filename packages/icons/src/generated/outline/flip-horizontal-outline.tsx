/**
 * Auto-generated logo component: Flip Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlipHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlipHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, FlipHorizontalOutlineLogoProps>(
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
      <path d="M3 12l18 0" />
  <path d="M7 16l10 0l-10 5l0 -5" />
  <path d="M7 8l10 0l-10 -5l0 5" />
    </svg>
  )
);

FlipHorizontalOutlineLogo.displayName = "FlipHorizontalOutlineLogo";

export const FlipHorizontalOutlineLogoMetadata = {
  id: "flip-horizontal-outline",
  baseId: "flip-horizontal-outline",
  variant: "default",
  name: "Flip Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlipHorizontalOutlineLogo;

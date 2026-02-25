/**
 * Auto-generated logo component: Box Margin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxMarginOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxMarginOutlineLogo = React.forwardRef<SVGSVGElement, BoxMarginOutlineLogoProps>(
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
      <path d="M8 8h8v8h-8l0 -8" />
  <path d="M4 4v.01" />
  <path d="M8 4v.01" />
  <path d="M12 4v.01" />
  <path d="M16 4v.01" />
  <path d="M20 4v.01" />
  <path d="M4 20v.01" />
  <path d="M8 20v.01" />
  <path d="M12 20v.01" />
  <path d="M16 20v.01" />
  <path d="M20 20v.01" />
  <path d="M20 16v.01" />
  <path d="M20 12v.01" />
  <path d="M20 8v.01" />
  <path d="M4 16v.01" />
  <path d="M4 12v.01" />
  <path d="M4 8v.01" />
    </svg>
  )
);

BoxMarginOutlineLogo.displayName = "BoxMarginOutlineLogo";

export const BoxMarginOutlineLogoMetadata = {
  id: "box-margin-outline",
  baseId: "box-margin-outline",
  variant: "default",
  name: "Box Margin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxMarginOutlineLogo;

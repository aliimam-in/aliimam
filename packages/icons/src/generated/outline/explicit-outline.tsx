/**
 * Auto-generated logo component: Explicit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExplicitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExplicitOutlineLogo = React.forwardRef<SVGSVGElement, ExplicitOutlineLogoProps>(
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
      <path d="M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M14 8h-4v8h4" />
  <path d="M14 12h-4" />
    </svg>
  )
);

ExplicitOutlineLogo.displayName = "ExplicitOutlineLogo";

export const ExplicitOutlineLogoMetadata = {
  id: "explicit-outline",
  baseId: "explicit-outline",
  variant: "default",
  name: "Explicit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExplicitOutlineLogo;

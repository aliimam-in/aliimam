/**
 * Auto-generated logo component: Prison Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrisonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrisonOutlineLogo = React.forwardRef<SVGSVGElement, PrisonOutlineLogoProps>(
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
      <path d="M18 4v16" />
  <path d="M14 4v16" />
  <path d="M6 4v5" />
  <path d="M6 15v5" />
  <path d="M10 4v5" />
  <path d="M11 9h-6v6h6l0 -6" />
  <path d="M10 15v5" />
  <path d="M8 12h-.01" />
    </svg>
  )
);

PrisonOutlineLogo.displayName = "PrisonOutlineLogo";

export const PrisonOutlineLogoMetadata = {
  id: "prison-outline",
  baseId: "prison-outline",
  variant: "default",
  name: "Prison Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrisonOutlineLogo;

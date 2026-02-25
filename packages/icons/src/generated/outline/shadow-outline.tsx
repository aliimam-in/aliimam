/**
 * Auto-generated logo component: Shadow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShadowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShadowOutlineLogo = React.forwardRef<SVGSVGElement, ShadowOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M13 12h5" />
  <path d="M13 15h4" />
  <path d="M13 18h1" />
  <path d="M13 9h4" />
  <path d="M13 6h1" />
    </svg>
  )
);

ShadowOutlineLogo.displayName = "ShadowOutlineLogo";

export const ShadowOutlineLogoMetadata = {
  id: "shadow-outline",
  baseId: "shadow-outline",
  variant: "default",
  name: "Shadow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShadowOutlineLogo;

/**
 * Auto-generated logo component: Shadow Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShadowOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShadowOffOutlineLogo = React.forwardRef<SVGSVGElement, ShadowOffOutlineLogoProps>(
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
      <path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" />
  <path d="M16 12h2" />
  <path d="M13 15h2" />
  <path d="M13 18h1" />
  <path d="M13 9h4" />
  <path d="M13 6h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShadowOffOutlineLogo.displayName = "ShadowOffOutlineLogo";

export const ShadowOffOutlineLogoMetadata = {
  id: "shadow-off-outline",
  baseId: "shadow-off-outline",
  variant: "default",
  name: "Shadow Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShadowOffOutlineLogo;

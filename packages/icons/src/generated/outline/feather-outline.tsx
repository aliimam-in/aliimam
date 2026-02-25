/**
 * Auto-generated logo component: Feather Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FeatherOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FeatherOutlineLogo = React.forwardRef<SVGSVGElement, FeatherOutlineLogoProps>(
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
      <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4" />
  <path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4" />
    </svg>
  )
);

FeatherOutlineLogo.displayName = "FeatherOutlineLogo";

export const FeatherOutlineLogoMetadata = {
  id: "feather-outline",
  baseId: "feather-outline",
  variant: "default",
  name: "Feather Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FeatherOutlineLogo;

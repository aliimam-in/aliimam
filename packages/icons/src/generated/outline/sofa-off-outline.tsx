/**
 * Auto-generated logo component: Sofa Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SofaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SofaOffOutlineLogo = React.forwardRef<SVGSVGElement, SofaOffOutlineLogoProps>(
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
      <path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1h-16a1 1 0 0 1 -1 -1v-5a2 2 0 1 1 4 0v1h8" />
  <path d="M4 11v-3c0 -1.082 .573 -2.03 1.432 -2.558m3.568 -.442h8a3 3 0 0 1 3 3v3" />
  <path d="M12 5v3m0 4v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SofaOffOutlineLogo.displayName = "SofaOffOutlineLogo";

export const SofaOffOutlineLogoMetadata = {
  id: "sofa-off-outline",
  baseId: "sofa-off-outline",
  variant: "default",
  name: "Sofa Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SofaOffOutlineLogo;

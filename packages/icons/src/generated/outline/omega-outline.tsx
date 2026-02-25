/**
 * Auto-generated logo component: Omega Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OmegaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OmegaOutlineLogo = React.forwardRef<SVGSVGElement, OmegaOutlineLogoProps>(
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
      <path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" />
    </svg>
  )
);

OmegaOutlineLogo.displayName = "OmegaOutlineLogo";

export const OmegaOutlineLogoMetadata = {
  id: "omega-outline",
  baseId: "omega-outline",
  variant: "default",
  name: "Omega Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OmegaOutlineLogo;

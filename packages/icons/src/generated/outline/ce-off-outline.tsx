/**
 * Auto-generated logo component: Ce Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CeOffOutlineLogo = React.forwardRef<SVGSVGElement, CeOffOutlineLogoProps>(
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
      <path d="M6.53 6.53a6.001 6.001 0 0 0 2.47 11.47" />
  <path d="M21 6a6 6 0 0 0 -5.927 5.061l.927 .939" />
  <path d="M16 12h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CeOffOutlineLogo.displayName = "CeOffOutlineLogo";

export const CeOffOutlineLogoMetadata = {
  id: "ce-off-outline",
  baseId: "ce-off-outline",
  variant: "default",
  name: "Ce Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CeOffOutlineLogo;

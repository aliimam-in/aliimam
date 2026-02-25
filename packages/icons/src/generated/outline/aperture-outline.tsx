/**
 * Auto-generated logo component: Aperture Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApertureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApertureOutlineLogo = React.forwardRef<SVGSVGElement, ApertureOutlineLogoProps>(
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
  <path d="M3.6 15h10.55" />
  <path d="M6.551 4.938l3.26 10.034" />
  <path d="M17.032 4.636l-8.535 6.201" />
  <path d="M20.559 14.51l-8.535 -6.201" />
  <path d="M12.257 20.916l3.261 -10.034" />
    </svg>
  )
);

ApertureOutlineLogo.displayName = "ApertureOutlineLogo";

export const ApertureOutlineLogoMetadata = {
  id: "aperture-outline",
  baseId: "aperture-outline",
  variant: "default",
  name: "Aperture Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApertureOutlineLogo;

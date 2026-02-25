/**
 * Auto-generated logo component: Aperture Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApertureOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApertureOffOutlineLogo = React.forwardRef<SVGSVGElement, ApertureOffOutlineLogoProps>(
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
      <path d="M3.6 15h10.55" />
  <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M7.395 7.534l2.416 7.438" />
  <path d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
  <path d="M20.559 14.51l-8.535 -6.201" />
  <path d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ApertureOffOutlineLogo.displayName = "ApertureOffOutlineLogo";

export const ApertureOffOutlineLogoMetadata = {
  id: "aperture-off-outline",
  baseId: "aperture-off-outline",
  variant: "default",
  name: "Aperture Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApertureOffOutlineLogo;

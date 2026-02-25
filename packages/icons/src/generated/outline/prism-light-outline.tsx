/**
 * Auto-generated logo component: Prism Light Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrismLightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrismLightOutlineLogo = React.forwardRef<SVGSVGElement, PrismLightOutlineLogoProps>(
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
      <path d="M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5" />
  <path d="M2 13h4.45" />
  <path d="M18 5l-4.5 6" />
  <path d="M22 9l-7.75 3.25" />
  <path d="M22 15l-7 -1.5" />
    </svg>
  )
);

PrismLightOutlineLogo.displayName = "PrismLightOutlineLogo";

export const PrismLightOutlineLogoMetadata = {
  id: "prism-light-outline",
  baseId: "prism-light-outline",
  variant: "default",
  name: "Prism Light Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrismLightOutlineLogo;

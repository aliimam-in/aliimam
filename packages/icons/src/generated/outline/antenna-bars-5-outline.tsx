/**
 * Auto-generated logo component: Antenna Bars 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaBars5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaBars5OutlineLogo = React.forwardRef<SVGSVGElement, AntennaBars5OutlineLogoProps>(
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
      <path d="M6 18l0 -3" />
  <path d="M10 18l0 -6" />
  <path d="M14 18l0 -9" />
  <path d="M18 18l0 -12" />
    </svg>
  )
);

AntennaBars5OutlineLogo.displayName = "AntennaBars5OutlineLogo";

export const AntennaBars5OutlineLogoMetadata = {
  id: "antenna-bars-5-outline",
  baseId: "antenna-bars-5-outline",
  variant: "default",
  name: "Antenna Bars 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaBars5OutlineLogo;

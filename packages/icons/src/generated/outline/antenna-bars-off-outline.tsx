/**
 * Auto-generated logo component: Antenna Bars Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaBarsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaBarsOffOutlineLogo = React.forwardRef<SVGSVGElement, AntennaBarsOffOutlineLogoProps>(
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
      <path d="M6 18v-3" />
  <path d="M10 18v-6" />
  <path d="M14 18v-4" />
  <path d="M14 10v-1" />
  <path d="M18 14v-8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AntennaBarsOffOutlineLogo.displayName = "AntennaBarsOffOutlineLogo";

export const AntennaBarsOffOutlineLogoMetadata = {
  id: "antenna-bars-off-outline",
  baseId: "antenna-bars-off-outline",
  variant: "default",
  name: "Antenna Bars Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaBarsOffOutlineLogo;

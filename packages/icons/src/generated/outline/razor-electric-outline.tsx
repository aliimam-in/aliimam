/**
 * Auto-generated logo component: Razor Electric Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RazorElectricOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RazorElectricOutlineLogo = React.forwardRef<SVGSVGElement, RazorElectricOutlineLogoProps>(
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
      <path d="M8 3v2" />
  <path d="M12 3v2" />
  <path d="M16 3v2" />
  <path d="M9 12v6a3 3 0 0 0 6 0v-6h-6" />
  <path d="M8 5h8l-1 4h-6l-1 -4" />
  <path d="M12 17v1" />
    </svg>
  )
);

RazorElectricOutlineLogo.displayName = "RazorElectricOutlineLogo";

export const RazorElectricOutlineLogoMetadata = {
  id: "razor-electric-outline",
  baseId: "razor-electric-outline",
  variant: "default",
  name: "Razor Electric Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RazorElectricOutlineLogo;

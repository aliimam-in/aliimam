/**
 * Auto-generated logo component: Bleach Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BleachOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BleachOutlineLogo = React.forwardRef<SVGSVGElement, BleachOutlineLogoProps>(
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
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>
  )
);

BleachOutlineLogo.displayName = "BleachOutlineLogo";

export const BleachOutlineLogoMetadata = {
  id: "bleach-outline",
  baseId: "bleach-outline",
  variant: "default",
  name: "Bleach Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BleachOutlineLogo;

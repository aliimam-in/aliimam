/**
 * Auto-generated logo component: Bleach Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BleachOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BleachOffOutlineLogo = React.forwardRef<SVGSVGElement, BleachOffOutlineLogoProps>(
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
      <path d="M5 19h14m1.986 -1.977a2 2 0 0 0 -.146 -.773l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.815 1.405m-1.488 2.568l-4.797 8.277a2 2 0 0 0 1.75 2.75" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BleachOffOutlineLogo.displayName = "BleachOffOutlineLogo";

export const BleachOffOutlineLogoMetadata = {
  id: "bleach-off-outline",
  baseId: "bleach-off-outline",
  variant: "default",
  name: "Bleach Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BleachOffOutlineLogo;

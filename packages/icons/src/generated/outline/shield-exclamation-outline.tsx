/**
 * Auto-generated logo component: Shield Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldExclamationOutlineLogo = React.forwardRef<SVGSVGElement, ShieldExclamationOutlineLogoProps>(
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
      <path d="M15.04 19.745c-.942 .551 -1.964 .976 -3.04 1.255a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .195 6.015" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

ShieldExclamationOutlineLogo.displayName = "ShieldExclamationOutlineLogo";

export const ShieldExclamationOutlineLogoMetadata = {
  id: "shield-exclamation-outline",
  baseId: "shield-exclamation-outline",
  variant: "default",
  name: "Shield Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldExclamationOutlineLogo;

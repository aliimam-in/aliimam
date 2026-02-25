/**
 * Auto-generated logo component: Shield X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldXOutlineLogo = React.forwardRef<SVGSVGElement, ShieldXOutlineLogoProps>(
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
      <path d="M13.252 20.601c-.408 .155 -.826 .288 -1.252 .399a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.19 7.357" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

ShieldXOutlineLogo.displayName = "ShieldXOutlineLogo";

export const ShieldXOutlineLogoMetadata = {
  id: "shield-x-outline",
  baseId: "shield-x-outline",
  variant: "default",
  name: "Shield X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldXOutlineLogo;

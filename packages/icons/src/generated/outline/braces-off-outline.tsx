/**
 * Auto-generated logo component: Braces Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracesOffOutlineLogo = React.forwardRef<SVGSVGElement, BracesOffOutlineLogoProps>(
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
      <path d="M5.176 5.177c-.113 .251 -.176 .53 -.176 .823v3c0 1.657 -.895 3 -2 3c1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2" />
  <path d="M17 4a2 2 0 0 1 2 2v3c0 1.657 .895 3 2 3c-1.105 0 -2 1.343 -2 3m-.176 3.821a2 2 0 0 1 -1.824 1.179" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BracesOffOutlineLogo.displayName = "BracesOffOutlineLogo";

export const BracesOffOutlineLogoMetadata = {
  id: "braces-off-outline",
  baseId: "braces-off-outline",
  variant: "default",
  name: "Braces Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracesOffOutlineLogo;

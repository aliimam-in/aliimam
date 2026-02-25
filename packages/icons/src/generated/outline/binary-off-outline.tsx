/**
 * Auto-generated logo component: Binary Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryOffOutlineLogo = React.forwardRef<SVGSVGElement, BinaryOffOutlineLogoProps>(
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
      <path d="M11 7v-2h-1" />
  <path d="M18 19v-1" />
  <path d="M15.5 5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5" />
  <path d="M10.5 14h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5" />
  <path d="M6 10v.01" />
  <path d="M6 19v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BinaryOffOutlineLogo.displayName = "BinaryOffOutlineLogo";

export const BinaryOffOutlineLogoMetadata = {
  id: "binary-off-outline",
  baseId: "binary-off-outline",
  variant: "default",
  name: "Binary Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryOffOutlineLogo;

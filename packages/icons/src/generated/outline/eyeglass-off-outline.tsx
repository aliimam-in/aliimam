/**
 * Auto-generated logo component: Eyeglass Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeglassOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeglassOffOutlineLogo = React.forwardRef<SVGSVGElement, EyeglassOffOutlineLogoProps>(
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
      <path d="M5.536 5.546l-2.536 8.454" />
  <path d="M16 4h2l3 10" />
  <path d="M10 16h4" />
  <path d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" />
  <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EyeglassOffOutlineLogo.displayName = "EyeglassOffOutlineLogo";

export const EyeglassOffOutlineLogoMetadata = {
  id: "eyeglass-off-outline",
  baseId: "eyeglass-off-outline",
  variant: "default",
  name: "Eyeglass Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeglassOffOutlineLogo;

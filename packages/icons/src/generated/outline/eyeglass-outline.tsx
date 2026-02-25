/**
 * Auto-generated logo component: Eyeglass Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeglassOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeglassOutlineLogo = React.forwardRef<SVGSVGElement, EyeglassOutlineLogoProps>(
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
      <path d="M8 4h-2l-3 10" />
  <path d="M16 4h2l3 10" />
  <path d="M10 16l4 0" />
  <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
  <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    </svg>
  )
);

EyeglassOutlineLogo.displayName = "EyeglassOutlineLogo";

export const EyeglassOutlineLogoMetadata = {
  id: "eyeglass-outline",
  baseId: "eyeglass-outline",
  variant: "default",
  name: "Eyeglass Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeglassOutlineLogo;

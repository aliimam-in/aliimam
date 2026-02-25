/**
 * Auto-generated logo component: Superscript Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SuperscriptOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SuperscriptOutlineLogo = React.forwardRef<SVGSVGElement, SuperscriptOutlineLogoProps>(
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
      <path d="M5 7l8 10m-8 0l8 -10" />
  <path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
    </svg>
  )
);

SuperscriptOutlineLogo.displayName = "SuperscriptOutlineLogo";

export const SuperscriptOutlineLogoMetadata = {
  id: "superscript-outline",
  baseId: "superscript-outline",
  variant: "default",
  name: "Superscript Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SuperscriptOutlineLogo;

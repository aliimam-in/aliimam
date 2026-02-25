/**
 * Auto-generated logo component: Jpg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JpgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JpgOutlineLogo = React.forwardRef<SVGSVGElement, JpgOutlineLogoProps>(
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
      <path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M10 16v-8h2a2 2 0 1 1 0 4h-2" />
  <path d="M3 8h4v6a2 2 0 0 1 -2 2h-1.5a.5 .5 0 0 1 -.5 -.5v-.5" />
    </svg>
  )
);

JpgOutlineLogo.displayName = "JpgOutlineLogo";

export const JpgOutlineLogoMetadata = {
  id: "jpg-outline",
  baseId: "jpg-outline",
  variant: "default",
  name: "Jpg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JpgOutlineLogo;

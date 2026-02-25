/**
 * Auto-generated logo component: Swords Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwordsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwordsOutlineLogo = React.forwardRef<SVGSVGElement, SwordsOutlineLogoProps>(
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
      <path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0" />
  <path d="M5 13l6 6" />
  <path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
  <path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
    </svg>
  )
);

SwordsOutlineLogo.displayName = "SwordsOutlineLogo";

export const SwordsOutlineLogoMetadata = {
  id: "swords-outline",
  baseId: "swords-outline",
  variant: "default",
  name: "Swords Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwordsOutlineLogo;

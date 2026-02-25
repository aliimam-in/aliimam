/**
 * Auto-generated logo component: Coffin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoffinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoffinOutlineLogo = React.forwardRef<SVGSVGElement, CoffinOutlineLogoProps>(
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
      <path d="M7 3l-2 6l2 12h6l2 -12l-2 -6l-6 0" />
  <path d="M10 7v5" />
  <path d="M8 9h4" />
  <path d="M13 21h4l2 -12l-2 -6h-4" />
    </svg>
  )
);

CoffinOutlineLogo.displayName = "CoffinOutlineLogo";

export const CoffinOutlineLogoMetadata = {
  id: "coffin-outline",
  baseId: "coffin-outline",
  variant: "default",
  name: "Coffin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoffinOutlineLogo;

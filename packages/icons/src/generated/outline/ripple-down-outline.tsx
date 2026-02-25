/**
 * Auto-generated logo component: Ripple Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RippleDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RippleDownOutlineLogo = React.forwardRef<SVGSVGElement, RippleDownOutlineLogoProps>(
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
      <path d="M3 7q 4.5 -3 9 0t 9 0" />
  <path d="M3 17q 4.5 -3 9 0q .213 .142 .427 .27" />
  <path d="M3 12q 4.5 -3 9 0q 2.006 1.338 4.012 1.482" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

RippleDownOutlineLogo.displayName = "RippleDownOutlineLogo";

export const RippleDownOutlineLogoMetadata = {
  id: "ripple-down-outline",
  baseId: "ripple-down-outline",
  variant: "default",
  name: "Ripple Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RippleDownOutlineLogo;

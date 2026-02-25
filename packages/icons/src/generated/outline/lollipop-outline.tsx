/**
 * Auto-generated logo component: Lollipop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LollipopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LollipopOutlineLogo = React.forwardRef<SVGSVGElement, LollipopOutlineLogoProps>(
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
      <path d="M7 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 10a3.5 3.5 0 0 0 -7 0" />
  <path d="M14 10a3.5 3.5 0 0 1 -7 0" />
  <path d="M14 17a3.5 3.5 0 0 0 0 -7" />
  <path d="M14 3a3.5 3.5 0 0 0 0 7" />
  <path d="M3 21l6 -6" />
    </svg>
  )
);

LollipopOutlineLogo.displayName = "LollipopOutlineLogo";

export const LollipopOutlineLogoMetadata = {
  id: "lollipop-outline",
  baseId: "lollipop-outline",
  variant: "default",
  name: "Lollipop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LollipopOutlineLogo;

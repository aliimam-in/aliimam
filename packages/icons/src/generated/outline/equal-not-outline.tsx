/**
 * Auto-generated logo component: Equal Not Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EqualNotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EqualNotOutlineLogo = React.forwardRef<SVGSVGElement, EqualNotOutlineLogoProps>(
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
      <path d="M5 10h14" />
  <path d="M5 14h14" />
  <path d="M5 19l14 -14" />
    </svg>
  )
);

EqualNotOutlineLogo.displayName = "EqualNotOutlineLogo";

export const EqualNotOutlineLogoMetadata = {
  id: "equal-not-outline",
  baseId: "equal-not-outline",
  variant: "default",
  name: "Equal Not Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EqualNotOutlineLogo;

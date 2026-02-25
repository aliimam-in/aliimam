/**
 * Auto-generated logo component: Overline Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OverlineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OverlineOutlineLogo = React.forwardRef<SVGSVGElement, OverlineOutlineLogoProps>(
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
      <path d="M7 9v5a5 5 0 0 0 10 0v-5" />
  <path d="M5 5h14" />
    </svg>
  )
);

OverlineOutlineLogo.displayName = "OverlineOutlineLogo";

export const OverlineOutlineLogoMetadata = {
  id: "overline-outline",
  baseId: "overline-outline",
  variant: "default",
  name: "Overline Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OverlineOutlineLogo;

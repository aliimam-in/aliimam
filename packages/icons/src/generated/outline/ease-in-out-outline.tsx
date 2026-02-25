/**
 * Auto-generated logo component: Ease In Out Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseInOutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseInOutOutlineLogo = React.forwardRef<SVGSVGElement, EaseInOutOutlineLogoProps>(
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
      <path d="M3 20c8 0 10 -16 18 -16" />
    </svg>
  )
);

EaseInOutOutlineLogo.displayName = "EaseInOutOutlineLogo";

export const EaseInOutOutlineLogoMetadata = {
  id: "ease-in-out-outline",
  baseId: "ease-in-out-outline",
  variant: "default",
  name: "Ease In Out Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseInOutOutlineLogo;

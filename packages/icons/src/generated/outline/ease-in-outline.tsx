/**
 * Auto-generated logo component: Ease In Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseInOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseInOutlineLogo = React.forwardRef<SVGSVGElement, EaseInOutlineLogoProps>(
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
      <path d="M3 20c8 0 18 -16 18 -16" />
    </svg>
  )
);

EaseInOutlineLogo.displayName = "EaseInOutlineLogo";

export const EaseInOutlineLogoMetadata = {
  id: "ease-in-outline",
  baseId: "ease-in-outline",
  variant: "default",
  name: "Ease In Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseInOutlineLogo;

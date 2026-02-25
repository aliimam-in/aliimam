/**
 * Auto-generated logo component: Ease Out Control Point Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseOutControlPointOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseOutControlPointOutlineLogo = React.forwardRef<SVGSVGElement, EaseOutControlPointOutlineLogoProps>(
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
      <path d="M3 21s10 -16 18 -16" />
  <path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M7 5h2" />
  <path d="M14 5h-2" />
    </svg>
  )
);

EaseOutControlPointOutlineLogo.displayName = "EaseOutControlPointOutlineLogo";

export const EaseOutControlPointOutlineLogoMetadata = {
  id: "ease-out-control-point-outline",
  baseId: "ease-out-control-point-outline",
  variant: "default",
  name: "Ease Out Control Point Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseOutControlPointOutlineLogo;

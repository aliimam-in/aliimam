/**
 * Auto-generated logo component: Ease In Control Point Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseInControlPointOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseInControlPointOutlineLogo = React.forwardRef<SVGSVGElement, EaseInControlPointOutlineLogoProps>(
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
      <path d="M3 19c8 0 18 -16 18 -16" />
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M17 19h-2" />
  <path d="M12 19h-2" />
    </svg>
  )
);

EaseInControlPointOutlineLogo.displayName = "EaseInControlPointOutlineLogo";

export const EaseInControlPointOutlineLogoMetadata = {
  id: "ease-in-control-point-outline",
  baseId: "ease-in-control-point-outline",
  variant: "default",
  name: "Ease In Control Point Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseInControlPointOutlineLogo;

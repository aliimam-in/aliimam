/**
 * Auto-generated logo component: Ease Out Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseOutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseOutOutlineLogo = React.forwardRef<SVGSVGElement, EaseOutOutlineLogoProps>(
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
      <path d="M3 20s10 -16 18 -16" />
    </svg>
  )
);

EaseOutOutlineLogo.displayName = "EaseOutOutlineLogo";

export const EaseOutOutlineLogoMetadata = {
  id: "ease-out-outline",
  baseId: "ease-out-outline",
  variant: "default",
  name: "Ease Out Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseOutOutlineLogo;

/**
 * Auto-generated logo component: Hammer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HammerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HammerOutlineLogo = React.forwardRef<SVGSVGElement, HammerOutlineLogoProps>(
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
      <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
  <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0" />
    </svg>
  )
);

HammerOutlineLogo.displayName = "HammerOutlineLogo";

export const HammerOutlineLogoMetadata = {
  id: "hammer-outline",
  baseId: "hammer-outline",
  variant: "default",
  name: "Hammer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HammerOutlineLogo;

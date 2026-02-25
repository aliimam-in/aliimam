/**
 * Auto-generated logo component: Swimming Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwimmingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwimmingOutlineLogo = React.forwardRef<SVGSVGElement, SwimmingOutlineLogoProps>(
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
      <path d="M15 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M6 11l4 -2l3.5 3l-1.5 2" />
  <path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
    </svg>
  )
);

SwimmingOutlineLogo.displayName = "SwimmingOutlineLogo";

export const SwimmingOutlineLogoMetadata = {
  id: "swimming-outline",
  baseId: "swimming-outline",
  variant: "default",
  name: "Swimming Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwimmingOutlineLogo;

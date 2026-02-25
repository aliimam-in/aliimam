/**
 * Auto-generated logo component: Arrow Capsule Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowCapsuleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowCapsuleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowCapsuleOutlineLogoProps>(
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
      <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
  <path d="M15 8l3 3l3 -3" />
    </svg>
  )
);

ArrowCapsuleOutlineLogo.displayName = "ArrowCapsuleOutlineLogo";

export const ArrowCapsuleOutlineLogoMetadata = {
  id: "arrow-capsule-outline",
  baseId: "arrow-capsule-outline",
  variant: "default",
  name: "Arrow Capsule Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowCapsuleOutlineLogo;

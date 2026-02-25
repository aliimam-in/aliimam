/**
 * Auto-generated logo component: Capsule Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapsuleHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapsuleHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, CapsuleHorizontalOutlineLogoProps>(
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
      <path d="M3 12a6 6 0 0 1 6 -6h6a6 6 0 0 1 6 6a6 6 0 0 1 -6 6h-6a6 6 0 0 1 -6 -6" />
    </svg>
  )
);

CapsuleHorizontalOutlineLogo.displayName = "CapsuleHorizontalOutlineLogo";

export const CapsuleHorizontalOutlineLogoMetadata = {
  id: "capsule-horizontal-outline",
  baseId: "capsule-horizontal-outline",
  variant: "default",
  name: "Capsule Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapsuleHorizontalOutlineLogo;

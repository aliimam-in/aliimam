/**
 * Auto-generated logo component: Capsule Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapsuleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapsuleOutlineLogo = React.forwardRef<SVGSVGElement, CapsuleOutlineLogoProps>(
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
      <path d="M6 9a6 6 0 0 1 6 -6a6 6 0 0 1 6 6v6a6 6 0 0 1 -6 6a6 6 0 0 1 -6 -6l0 -6" />
    </svg>
  )
);

CapsuleOutlineLogo.displayName = "CapsuleOutlineLogo";

export const CapsuleOutlineLogoMetadata = {
  id: "capsule-outline",
  baseId: "capsule-outline",
  variant: "default",
  name: "Capsule Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapsuleOutlineLogo;

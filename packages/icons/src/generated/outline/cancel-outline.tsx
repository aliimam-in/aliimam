/**
 * Auto-generated logo component: Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CancelOutlineLogo = React.forwardRef<SVGSVGElement, CancelOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M18.364 5.636l-12.728 12.728" />
    </svg>
  )
);

CancelOutlineLogo.displayName = "CancelOutlineLogo";

export const CancelOutlineLogoMetadata = {
  id: "cancel-outline",
  baseId: "cancel-outline",
  variant: "default",
  name: "Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CancelOutlineLogo;

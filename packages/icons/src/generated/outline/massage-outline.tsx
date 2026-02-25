/**
 * Auto-generated logo component: Massage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MassageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MassageOutlineLogo = React.forwardRef<SVGSVGElement, MassageOutlineLogoProps>(
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
      <path d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 22l4 -2v-3h12" />
  <path d="M11 20h9" />
  <path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
    </svg>
  )
);

MassageOutlineLogo.displayName = "MassageOutlineLogo";

export const MassageOutlineLogoMetadata = {
  id: "massage-outline",
  baseId: "massage-outline",
  variant: "default",
  name: "Massage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MassageOutlineLogo;

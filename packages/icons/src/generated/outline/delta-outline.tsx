/**
 * Auto-generated logo component: Delta Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeltaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeltaOutlineLogo = React.forwardRef<SVGSVGElement, DeltaOutlineLogoProps>(
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
      <path d="M4 20h16l-8 -16l-8 16" />
    </svg>
  )
);

DeltaOutlineLogo.displayName = "DeltaOutlineLogo";

export const DeltaOutlineLogoMetadata = {
  id: "delta-outline",
  baseId: "delta-outline",
  variant: "default",
  name: "Delta Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeltaOutlineLogo;

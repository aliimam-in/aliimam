/**
 * Auto-generated logo component: Mountain Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MountainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MountainOutlineLogo = React.forwardRef<SVGSVGElement, MountainOutlineLogoProps>(
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
      <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612" />
  <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
    </svg>
  )
);

MountainOutlineLogo.displayName = "MountainOutlineLogo";

export const MountainOutlineLogoMetadata = {
  id: "mountain-outline",
  baseId: "mountain-outline",
  variant: "default",
  name: "Mountain Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MountainOutlineLogo;

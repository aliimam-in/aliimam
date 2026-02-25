/**
 * Auto-generated logo component: Mountain Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MountainOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MountainOffOutlineLogo = React.forwardRef<SVGSVGElement, MountainOffOutlineLogoProps>(
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
      <path d="M18.281 14.26l-4.201 -8.872a2.3 2.3 0 0 0 -4.158 0l-.165 .349m-1.289 2.719l-5.468 11.544h17" />
  <path d="M7.5 11l2 2.5l2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MountainOffOutlineLogo.displayName = "MountainOffOutlineLogo";

export const MountainOffOutlineLogoMetadata = {
  id: "mountain-off-outline",
  baseId: "mountain-off-outline",
  variant: "default",
  name: "Mountain Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MountainOffOutlineLogo;

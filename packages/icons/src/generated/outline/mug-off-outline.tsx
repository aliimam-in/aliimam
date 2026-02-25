/**
 * Auto-generated logo component: Mug Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MugOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MugOffOutlineLogo = React.forwardRef<SVGSVGElement, MugOffOutlineLogoProps>(
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
      <path d="M9 5h5.917a1.08 1.08 0 0 1 1.083 1.077v5.923m-.167 3.88a4.33 4.33 0 0 1 -4.166 3.12h-4.334c-2.393 0 -4.333 -1.929 -4.333 -4.308v-8.615a1.08 1.08 0 0 1 1.083 -1.077h.917" />
  <path d="M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.148 -.89 2.103 -2.06 2.297" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MugOffOutlineLogo.displayName = "MugOffOutlineLogo";

export const MugOffOutlineLogoMetadata = {
  id: "mug-off-outline",
  baseId: "mug-off-outline",
  variant: "default",
  name: "Mug Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MugOffOutlineLogo;

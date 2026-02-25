/**
 * Auto-generated logo component: Volcano Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VolcanoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VolcanoOutlineLogo = React.forwardRef<SVGSVGElement, VolcanoOutlineLogoProps>(
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
      <path d="M9 8v-1a2 2 0 1 0 -4 0" />
  <path d="M15 8v-1a2 2 0 1 1 4 0" />
  <path d="M4 20l3.472 -7.812a2 2 0 0 1 1.828 -1.188h5.4a2 2 0 0 1 1.828 1.188l3.472 7.812" />
  <path d="M6.192 15.064a2.14 2.14 0 0 1 .475 -.064c.527 -.009 1.026 .178 1.333 .5c.307 .32 .806 .507 1.333 .5c.527 .007 1.026 -.18 1.334 -.5c.307 -.322 .806 -.509 1.333 -.5c.527 -.009 1.026 .178 1.333 .5c.308 .32 .807 .507 1.334 .5c.527 .007 1.026 -.18 1.333 -.5c.307 -.322 .806 -.509 1.333 -.5c.161 .003 .32 .025 .472 .064" />
  <path d="M12 8v-4" />
    </svg>
  )
);

VolcanoOutlineLogo.displayName = "VolcanoOutlineLogo";

export const VolcanoOutlineLogoMetadata = {
  id: "volcano-outline",
  baseId: "volcano-outline",
  variant: "default",
  name: "Volcano Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VolcanoOutlineLogo;

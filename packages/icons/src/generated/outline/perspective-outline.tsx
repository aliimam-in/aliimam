/**
 * Auto-generated logo component: Perspective Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PerspectiveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PerspectiveOutlineLogo = React.forwardRef<SVGSVGElement, PerspectiveOutlineLogoProps>(
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
      <path d="M6.141 4.163l12 1.714a1 1 0 0 1 .859 .99v10.266a1 1 0 0 1 -.859 .99l-12 1.714a1 1 0 0 1 -1.141 -.99v-13.694a1 1 0 0 1 1.141 -.99" />
    </svg>
  )
);

PerspectiveOutlineLogo.displayName = "PerspectiveOutlineLogo";

export const PerspectiveOutlineLogoMetadata = {
  id: "perspective-outline",
  baseId: "perspective-outline",
  variant: "default",
  name: "Perspective Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PerspectiveOutlineLogo;

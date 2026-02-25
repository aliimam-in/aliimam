/**
 * Auto-generated logo component: Perspective Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PerspectiveOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PerspectiveOffOutlineLogo = React.forwardRef<SVGSVGElement, PerspectiveOffOutlineLogoProps>(
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
      <path d="M8.511 4.502l9.63 1.375a1 1 0 0 1 .859 .99v8.133m-.859 3.123l-12 1.714a1 1 0 0 1 -1.141 -.99v-13.694a1 1 0 0 1 .01 -.137" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PerspectiveOffOutlineLogo.displayName = "PerspectiveOffOutlineLogo";

export const PerspectiveOffOutlineLogoMetadata = {
  id: "perspective-off-outline",
  baseId: "perspective-off-outline",
  variant: "default",
  name: "Perspective Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PerspectiveOffOutlineLogo;

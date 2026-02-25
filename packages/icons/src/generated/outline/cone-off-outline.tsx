/**
 * Auto-generated logo component: Cone Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConeOffOutlineLogo = React.forwardRef<SVGSVGElement, ConeOffOutlineLogoProps>(
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
      <path d="M20.396 16.384l-7.526 -13.877a1 1 0 0 0 -1.74 0l-1.626 2.998m-1.407 2.594l-5.097 9.398v.5c0 1.66 4.03 3.003 9 3.003c3.202 0 6.014 -.558 7.609 -1.398" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ConeOffOutlineLogo.displayName = "ConeOffOutlineLogo";

export const ConeOffOutlineLogoMetadata = {
  id: "cone-off-outline",
  baseId: "cone-off-outline",
  variant: "default",
  name: "Cone Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConeOffOutlineLogo;

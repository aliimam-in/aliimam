/**
 * Auto-generated logo component: Flask 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flask2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flask2OffOutlineLogo = React.forwardRef<SVGSVGElement, Flask2OffOutlineLogoProps>(
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
      <path d="M6.1 15h8.9" />
  <path d="M17.742 17.741a6 6 0 0 1 -2.424 3.259h-6.635a6 6 0 0 1 1.317 -10.66v-.326m0 -4.014v-3h4v7m.613 .598a6 6 0 0 1 2.801 2.817" />
  <path d="M9 3h6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Flask2OffOutlineLogo.displayName = "Flask2OffOutlineLogo";

export const Flask2OffOutlineLogoMetadata = {
  id: "flask-2-off-outline",
  baseId: "flask-2-off-outline",
  variant: "default",
  name: "Flask 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flask2OffOutlineLogo;

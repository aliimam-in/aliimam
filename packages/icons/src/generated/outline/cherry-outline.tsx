/**
 * Auto-generated logo component: Cherry Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CherryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CherryOutlineLogo = React.forwardRef<SVGSVGElement, CherryOutlineLogoProps>(
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
      <path d="M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M14 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" />
  <path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" />
  <path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" />
    </svg>
  )
);

CherryOutlineLogo.displayName = "CherryOutlineLogo";

export const CherryOutlineLogoMetadata = {
  id: "cherry-outline",
  baseId: "cherry-outline",
  variant: "default",
  name: "Cherry Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CherryOutlineLogo;

/**
 * Auto-generated logo component: Lasso (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoLogo = React.forwardRef<SVGSVGElement, LassoLogoProps>(
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
      <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" />
  <path d="M7 22a5 5 0 0 1-2-3.994" />
  <circle cx="5" cy="16" r="2" />
    </svg>
  )
);

LassoLogo.displayName = "LassoLogo";

export const LassoLogoMetadata = {
  id: "lasso",
  baseId: "lasso",
  variant: "default",
  name: "Lasso",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoLogo;

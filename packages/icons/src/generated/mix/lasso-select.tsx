/**
 * Auto-generated logo component: Lasso Select (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoSelectLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoSelectLogo = React.forwardRef<SVGSVGElement, LassoSelectLogoProps>(
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
      <path d="M7 22a5 5 0 0 1-2-4" />
  <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
  <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
  <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
    </svg>
  )
);

LassoSelectLogo.displayName = "LassoSelectLogo";

export const LassoSelectLogoMetadata = {
  id: "lasso-select",
  baseId: "lasso-select",
  variant: "default",
  name: "Lasso Select",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoSelectLogo;

/**
 * Auto-generated logo component: Minimize (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinimizeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinimizeLogo = React.forwardRef<SVGSVGElement, MinimizeLogoProps>(
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
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
    </svg>
  )
);

MinimizeLogo.displayName = "MinimizeLogo";

export const MinimizeLogoMetadata = {
  id: "minimize",
  baseId: "minimize",
  variant: "default",
  name: "Minimize",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinimizeLogo;

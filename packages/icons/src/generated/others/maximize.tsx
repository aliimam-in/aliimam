/**
 * Auto-generated logo component: Maximize (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MaximizeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MaximizeLogo = React.forwardRef<SVGSVGElement, MaximizeLogoProps>(
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
);

MaximizeLogo.displayName = "MaximizeLogo";

export const MaximizeLogoMetadata = {
  id: "maximize",
  baseId: "maximize",
  variant: "default",
  name: "Maximize",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MaximizeLogo;

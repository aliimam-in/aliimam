/**
 * Auto-generated logo component: View 360 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface View360OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const View360OutlineLogo = React.forwardRef<SVGSVGElement, View360OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M8 12a4 9 0 1 0 8 0a4 9 0 1 0 -8 0" />
  <path d="M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4" />
    </svg>
  )
);

View360OutlineLogo.displayName = "View360OutlineLogo";

export const View360OutlineLogoMetadata = {
  id: "view-360-outline",
  baseId: "view-360-outline",
  variant: "default",
  name: "View 360 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default View360OutlineLogo;

/**
 * Auto-generated logo component: Reload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReloadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReloadOutlineLogo = React.forwardRef<SVGSVGElement, ReloadOutlineLogoProps>(
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
      <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
  <path d="M20 4v5h-5" />
    </svg>
  )
);

ReloadOutlineLogo.displayName = "ReloadOutlineLogo";

export const ReloadOutlineLogoMetadata = {
  id: "reload-outline",
  baseId: "reload-outline",
  variant: "default",
  name: "Reload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReloadOutlineLogo;

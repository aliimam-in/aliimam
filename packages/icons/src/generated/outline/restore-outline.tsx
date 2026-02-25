/**
 * Auto-generated logo component: Restore Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RestoreOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RestoreOutlineLogo = React.forwardRef<SVGSVGElement, RestoreOutlineLogoProps>(
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
      <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
  <path d="M3 4.001v5h5" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

RestoreOutlineLogo.displayName = "RestoreOutlineLogo";

export const RestoreOutlineLogoMetadata = {
  id: "restore-outline",
  baseId: "restore-outline",
  variant: "default",
  name: "Restore Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RestoreOutlineLogo;

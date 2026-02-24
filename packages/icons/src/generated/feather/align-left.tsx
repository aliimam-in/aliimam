/**
 * Auto-generated logo component: Align Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignLeftLogo = React.forwardRef<SVGSVGElement, AlignLeftLogoProps>(
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
      <line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/>
    </svg>
  )
);

AlignLeftLogo.displayName = "AlignLeftLogo";

export const AlignLeftLogoMetadata = {
  id: "align-left",
  baseId: "align-left",
  variant: "default",
  name: "Align Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignLeftLogo;

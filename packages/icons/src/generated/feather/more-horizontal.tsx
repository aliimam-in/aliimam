/**
 * Auto-generated logo component: More Horizontal (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoreHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoreHorizontalLogo = React.forwardRef<SVGSVGElement, MoreHorizontalLogoProps>(
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
      <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
    </svg>
  )
);

MoreHorizontalLogo.displayName = "MoreHorizontalLogo";

export const MoreHorizontalLogoMetadata = {
  id: "more-horizontal",
  baseId: "more-horizontal",
  variant: "default",
  name: "More Horizontal",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoreHorizontalLogo;

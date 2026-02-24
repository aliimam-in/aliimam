/**
 * Auto-generated logo component: More Vertical (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoreVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoreVerticalLogo = React.forwardRef<SVGSVGElement, MoreVerticalLogoProps>(
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
      <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
    </svg>
  )
);

MoreVerticalLogo.displayName = "MoreVerticalLogo";

export const MoreVerticalLogoMetadata = {
  id: "more-vertical",
  baseId: "more-vertical",
  variant: "default",
  name: "More Vertical",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoreVerticalLogo;

/**
 * Auto-generated logo component: Ellipsis Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EllipsisVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EllipsisVerticalLogo = React.forwardRef<SVGSVGElement, EllipsisVerticalLogoProps>(
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
      <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
    </svg>
  )
);

EllipsisVerticalLogo.displayName = "EllipsisVerticalLogo";

export const EllipsisVerticalLogoMetadata = {
  id: "ellipsis-vertical",
  baseId: "ellipsis-vertical",
  variant: "default",
  name: "Ellipsis Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EllipsisVerticalLogo;

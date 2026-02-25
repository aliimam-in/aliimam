/**
 * Auto-generated logo component: Ellipsis (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EllipsisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EllipsisLogo = React.forwardRef<SVGSVGElement, EllipsisLogoProps>(
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
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
    </svg>
  )
);

EllipsisLogo.displayName = "EllipsisLogo";

export const EllipsisLogoMetadata = {
  id: "ellipsis",
  baseId: "ellipsis",
  variant: "default",
  name: "Ellipsis",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EllipsisLogo;

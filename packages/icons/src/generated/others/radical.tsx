/**
 * Auto-generated logo component: Radical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadicalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadicalLogo = React.forwardRef<SVGSVGElement, RadicalLogoProps>(
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
      <path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" />
    </svg>
  )
);

RadicalLogo.displayName = "RadicalLogo";

export const RadicalLogoMetadata = {
  id: "radical",
  baseId: "radical",
  variant: "default",
  name: "Radical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadicalLogo;

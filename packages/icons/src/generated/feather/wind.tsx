/**
 * Auto-generated logo component: Wind (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindLogo = React.forwardRef<SVGSVGElement, WindLogoProps>(
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
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
    </svg>
  )
);

WindLogo.displayName = "WindLogo";

export const WindLogoMetadata = {
  id: "wind",
  baseId: "wind",
  variant: "default",
  name: "Wind",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindLogo;

/**
 * Auto-generated logo component: Heart (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartLogo = React.forwardRef<SVGSVGElement, HeartLogoProps>(
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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
);

HeartLogo.displayName = "HeartLogo";

export const HeartLogoMetadata = {
  id: "heart",
  baseId: "heart",
  variant: "default",
  name: "Heart",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartLogo;

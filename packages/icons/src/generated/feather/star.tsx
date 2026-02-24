/**
 * Auto-generated logo component: Star (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StarLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StarLogo = React.forwardRef<SVGSVGElement, StarLogoProps>(
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
);

StarLogo.displayName = "StarLogo";

export const StarLogoMetadata = {
  id: "star",
  baseId: "star",
  variant: "default",
  name: "Star",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StarLogo;

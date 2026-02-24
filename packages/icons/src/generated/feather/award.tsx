/**
 * Auto-generated logo component: Award (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AwardLogo = React.forwardRef<SVGSVGElement, AwardLogoProps>(
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
      <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  )
);

AwardLogo.displayName = "AwardLogo";

export const AwardLogoMetadata = {
  id: "award",
  baseId: "award",
  variant: "default",
  name: "Award",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AwardLogo;
